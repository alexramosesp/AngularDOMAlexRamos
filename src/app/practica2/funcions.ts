export function yellowSubmarine(ID: any) {
  let element = document.getElementById(ID);
  // @ts-ignore
  element.style.color = 'yellow';
}

export function changeSize(table: any){
  let element = document.getElementById(table);
  // @ts-ignore
  element.style.width = (400+"px")
}
export function wordCount(str: string): number {
  let element = document.getElementById(str);
    // @ts-ignore
    return element.textContent.split(' ').length;
}

