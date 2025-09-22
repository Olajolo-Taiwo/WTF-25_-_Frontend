const students = [
    {
        studentName: "Aliyah",
        studentId: "12345",
        score: "40"
    },
    {
        studentName: "Animbom",
        studentId: "3456",
        score: "65"
    },
    {
        studentName: "Mercy",
        studentId: "2345",
        score: "8"
    },
    {
        studentName: "Chigozie",
        studentId: "11123",
        score: "95"
    },
    {
        studentName: "Karen",
        studentId: "55431",
        score: "96"
    },
    {
        studentName: "Lois",
        studentId: "2223",
        score: "100"
    },
]

function getGrade (student){
    if (students[student].score <= 100 && students[student].score >= 70){
        console.log(`Grade: A`);
    }
    else if (students[student].score < 70 && students[student].score >= 60){
        console.log(`Grade: B`);
    }
    else if (students[student].score < 60 && students[student].score >= 40){
        console.log(`$Grade: C`);
    }
    else{
        console.log(`Grade: F`);
    }
}

function getAverage(){
    const amount = students.length;
    let Total = 0;
    let student = 0;
    let average;

    while(student < amount){
        students[student].score = Number(students[student].score);
        Total += students[student].score;
        student++;
    }
    average = Total/amount;
    return average;
}

function getInfo(){
    console.log("Debugdolls 101");
    console.log("");

    for (let student in students){
        console.log(`Name: ${students[student].studentName}`);
        console.log(`ID: ${students[student].studentId}`);
        console.log(`Score: ${students[student].score}`);
        getGrade(student);
        console.log("")
    }

    let average = getAverage();
    console.log(`The Average score of Debugdolls 101 is ${average}`)
}


getInfo();
 
