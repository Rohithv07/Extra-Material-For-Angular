import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sortpipe'
})
export class SortPipe implements PipeTransform{
    transform(s: string[]):string[] {
        return s.sort((a, b) => {
            return a < b ? -1 : (a > b ? 1 : 0);
        });
    }
}