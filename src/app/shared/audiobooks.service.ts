import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FbCreateResponse, Post } from './interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

// providedIn: "root" за даможе всички да го виждат
@Injectable({ providedIn: 'root' })
export class AudiobooksService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.FbDBUrl}/audiobooks.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date),
        };
      })
    );
  }
  // Взимаме всички постове от базата данни и ги връщаме като масив от обекти
  // като във всеки обект добавяме и id-то на поста и дата на поста
  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.FbDBUrl}/audiobooks.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date),
        }));
      })
    );
  }

  // взимаме данни от сървъра по ID
  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.FbDBUrl}/audiobooks/${id}.json`)
      .pipe(map((audiobook: Post) => {
        return {
          ...audiobook,
          id,
          date: new Date(audiobook.date),
        };
      }))
  }

  remove (id: string): Observable<void> {
    return this.http.delete<void>(`${environment.FbDBUrl}/audiobooks/${id}.json`)
  }
  update(audiobook: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.FbDBUrl}/audiobooks/${audiobook.id}.json`, audiobook);
  }
}
