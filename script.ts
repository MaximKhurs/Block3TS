// 1.
// const faculties = [
// {
// id: 1,
// faculty: "History department",
// subjects: ["The World History", "History of Rome"]
// countStudents: 44
// },
// {
// id: 2,
// faculty: "Department of Biology",
// subjects: ["biology", "chemistry"],
// countStudents: 50
// },
// Teachmeskills.by
// {
// id: 3,
// faculty: "Faculty of Mathematics",
// subjects: ["mathematics", "geometry", "trigonometry"],
// countStudents: 72
// },
// {
// id: 4,
// faculty: "Faculty of Design",
// subjects: ["ui", "ux", "graphic design"],
// countStudents: 37
// }
// ];

    // type Faculity = {
    //     id:number,
    //     faculty: string,
    //     subjects: string[],
    //     countStudents: number,
    // }


    // const movies = [
    //     {
        //     id: 1,
        //     title: "Black Widow",
        //     year: 2021,
        //     released: "09 Jul 2021",
        //     runtime: "134 min",
        //     genre: ["Action", "Sci-Fi", "Adventure"],
        //     director: "Cate Shortland",
        //     writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        //     actors: ["Scarlett Johansson", "Florence Pugh", "David
        //     Harbour"],
        //     plot: "Natasha Romanoff confronts the darker parts of her
        //     ledger when a dangerous conspiracy with ties to her past arises.",
        //     country: "United States",
        //     poster: "https://m.media-
        //     amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3
        //     YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        //     imdbRating: 6.9,
        //     imdbVotes: 121932,
        //     type: "movie",
        //     boxOffice: "$138,027,361",
        //     production: "Marvel Studios",
    //     },
    //     {
        //     id: 2,
        //     title: "Harry Potter and the Deathly Hallows: Part 2",
        //     year: 2011,
        //     released: "15 Jul 2011",
        //     runtime: "130 min",
        //     genre: ["Adventure", "Drama", "Fantasy"],
        //     director: "David Yates",
        //     writer: "Steve Kloves, J.K. Rowling",
        //     actors: ["Daniel Radcliffe", "Emma Watson", "Rupert
        //     Grint"],
        //     plot: "Harry, Ron, and Hermione search for Voldemort's
        //     remaining Horcruxes in their effort to destroy the Dark Lord as the
        //     final battle rages on at Hogwarts.",
        //     country: "United Kingdom, United States",
        //     poster: "https://m.media-
        //     amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2Iz
        //     NDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        //     imdbRating: 8.1,
        //     imdbVotes: 790377,
        //     type: "movie",
        //     boxOffice: "$381,409,310",
        //     production: "Heyday Films, Moving Picture Company, Warner
        //     Bros.",
    //     },
    //     ];

            // type Movie = {
            //     id:number,
            //     title: string,
            //     year: number,
            //     released: string,
            //     runtime: string,
            //     genre: string[],
            //     director: string,
            //     writer: string,
            //     actors: string[],
            //     plot: string,
            //     country: string,
            //     poster: string,
            //     imdbRating:number,
            //     imdbVotes:number,
            //     type:string,
            //     boxOffice:string,
            //     production:string,
            // }



            type Users ={
                name: string,
                phone: string,
                email: string,
                animals?: string[],
                cars?: string[],
                hasChildren: boolean,
                hasEducation: boolean,
            }

            const users: Users[] = [
                {
                name: "Harry Felton",
                phone: "(09) 897 33 33",
                email: "felton@gmail.com",
                animals: ["cat"],
                cars: ["bmw"],
                hasChildren: false,
                hasEducation: true
                },
                {
                name: "May Sender",
                phone: "(09) 117 33 33",
                email: "sender22@gmail.com",
                hasChildren: true,
                hasEducation: true
                },
                {
                name: "Henry Ford",
                phone: "(09) 999 93 23",
                email: "ford0@gmail.com",
                cars: ["bmw", "audi"],
                hasChildren: true,
                hasEducation: false
                }
                ]


            //1  
            
            function getName(users: Users[]) : string{
                const names = users.map(user=>user.name).join(", ")
                return names
            }


            console.log(getName(users))




            //2
            function numCars(users: Users[]) : number{
                let total: number = 0;
                for(const user of users){
                    if(user.cars){
                        total += user.cars.length
                    }
                }
                return total
            }


            console.log(numCars(users))




            //3
            function hasEducation(users: Users[]):Users[]{
                return users.filter(user => user.hasEducation)
            }

            console.log(hasEducation(users))



            //4
            function hasAnimal(users: Users[]):Users[]{
                return users.filter(user => user.animals)
            }


            console.log(hasAnimal(users))



            //5

            function getUsersCar(users: Users[]):string{

                let car:string[] = []
                for (const user of users){
                    if(user.cars){
                        car.push(...user.cars)
                    }
                }

                return car.join(', ')
            }


            console.log(getUsersCar(users))