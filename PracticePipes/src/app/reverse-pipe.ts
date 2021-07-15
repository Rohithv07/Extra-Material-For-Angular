import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reversepipe'
})
export class ReversePipe implements PipeTransform{
    transform(s : string) {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }
}