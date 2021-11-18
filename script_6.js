let arn1 = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"

let arnArray = [arn1, arn2]
console.log(arnArray)
for (let index in arnArray){

let arnArraybythree = [];

do{arnArraybythree.push(arnArray[index].substring(0,3))}
while((arnArray[index] = arnArray[index].substring(3, arnArray[index].length)));

arrayAminoAcid =[] 


for (let index in arnArraybythree){
  if (arnArraybythree[index] == "UCU" || arnArraybythree[index] == "UCC" || arnArraybythree[index] == "UCA" || arnArraybythree[index] == "UCG" || arnArraybythree[index] == "AGU" || arnArraybythree[index] == "AGC" ) {
    arrayAminoAcid.push("Sérine ")
  }
  else if (arnArraybythree[index] == "CCU" || arnArraybythree[index] == "CCC" || arnArraybythree[index] == "CCA" || arnArraybythree[index] == "CCG" ) {
    arrayAminoAcid.push("Proline ")
  }
  else if (arnArraybythree[index] == "UUA" || arnArraybythree[index] == "UUG" ) {
    arrayAminoAcid.push("Leucine ")
  }
  else if (arnArraybythree[index] == "UUU" || arnArraybythree[index] == "UUC" ) {
    arrayAminoAcid.push("Phénylalanine ")
  }
  else if (arnArraybythree[index] == "CGU" || arnArraybythree[index] == "CGC" || arnArraybythree[index] == "CGA" || arnArraybythree[index] == "CGG" || arnArraybythree[index] == "AGA" || arnArraybythree[index] == "AGG" ) {
    arrayAminoAcid.push("Arginine ")
  }
  else if (arnArraybythree[index] == "UAU" || arnArraybythree[index] == "UAC" ) {
    arrayAminoAcid.push("Tyrosine ")
  }
  else{

  }
}
console.log(arrayAminoAcid)

}