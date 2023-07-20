import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../../../shared/interfaces";

@Pipe({
  name: 'searchAudiobooks'
})

export class SearchPipe implements PipeTransform {
  transform(audiobooks: Post[], search= ''): Post[] {
    if (!search.trim()) {
      return audiobooks
    }
    return audiobooks.filter(audiobook => {
      return audiobook.title.toLowerCase().includes(search.toLowerCase())
    } )
  }


}
