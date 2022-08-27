

function findGrade(name, marks) {

  if(marks >= 90 && marks <= 100){
    console.log(`${name} you have received S grade`)
  }
  else if(marks >= 80 && marks < 90){
    console.log(`${name} you have received A grade`)
  }
  else if(marks >= 70 && marks < 80){
    console.log(`${name} you have received B grade`)
  }
  else if(marks >= 60 && marks < 70){
    console.log(`${name} you have received C grade`)
  }
  else if(marks >= 50 && marks < 60){
    console.log(`${name} you have received D grade`)
  }
  else if(marks >= 40 && marks < 50){
    console.log(`${name} you have received E grade`)
  }
  else if(marks >= 0 && marks <40){
    console.log(`${name} you have Failed`)
  }
  else{
    console.log(`Invalid marks of ${marks}`)
  }
}

findGrade("Nishu Patel", 85) 
findGrade("Nishu Patel", 73) 
findGrade("Nishu Patel", 53) 
findGrade("Nishu Patel", 20) 
findGrade("Nishu Patel", 120)