import { Request, Response } from "express";
import { User } from "../entity/User";
import { createQueryBuilder, Equal, getCustomRepository, getManager, getRepository, LessThan, Like, Not, OneToMany } from "typeorm";
import { Userrepo } from "../repo/Userrepository";

// relation one to OneToMany, one to many , many to one 
import { Employee } from "../entityrelatoion/Employee";
import { Department } from "../entityrelatoion/Department";
import { Student } from "../entityrelatoion/Student";
import { Photo } from "../entityrelatoion/Photo";
import { Question } from "../entityrelatoion/Question";
import { Game } from "../entityrelatoion/Game";
import { Person } from "../entityrelatoion/person";
import { Resolver, reverse } from "dns";

const Userdata = async (req: Request, res: Response) => {
    // 1. crud perfome uisng getMagaer
    const entityManager = getManager();
    /* ---insert data using insert */
    /* let data = await entityManager.insert(User, {
        Name:"rinkal",
        email: "rinkal@gmail.com",
    }) */

    /* ---insert data using save */
    /* let data = new User();
        data.Name = "nirvan",
        data.email = "kasyap@gmail.com"
    let user = await entityManager.save(data)
    res.json({
        message:"user insert",
        data: user,
    }) */

    /* ---update data using update */
    /* let Updatedata = await entityManager.update(User, 4,{name:"rd"});
    res.json({
        message:"user update",
        data: Updatedata,
    }) */

    /* ---delete data using delete */
    /* let Deletedata = await entityManager.delete(User, 4);
    res.json({
        message:"user deletes",
        data: Deletedata,
    }) */

    /* ---all find using find */
    /* let Alluser = await entityManager.find(User);
    res.json({
        message:"user find",
        data: Alluser,
    }) */

    /* ---findone find data using by id */
    /* let Finduser = await entityManager.findOne(User,2);
    res.json({
        message:"one user data find",
        data: Finduser,
    }) */

    /* ---trucate */
  /*   let deletedata = await entityManager.clear(User);
    res.json({
        message:"user trucate",
        data: deletedata,
    }) */



    // 2. crud perform using getRepository
    // const repository = getRepository(User)

    /* ---insert data using insert */
    /* let data = await repository.insert({
        Name:"mina",
        email: "dave@gmail.com",
    })
    res.json({
        message:"user insert",
        data: data,
    })
 */
    /* ---insert data using save */
    /* let data = new User();
        data.Name = "rtytrt",
        data.email = "ygtryhtrh@gmail.com"
    let user = await repository.save(data)
    res.json({
        message:"user insert",
        data: user,
    }) */

    /* ---update data using update */
    /* let Updatedata = await repository.update(3,{Name:"54t64"});
    res.json({
        message:"user update",
        data: Updatedata,
    }) */

    /* ---delete data using delete */
    /* let Deletedata = await repository.delete(3);
    res.json({
        message:"user deletes",
        data: Deletedata,
    }) */

    /* ---all find using find */
    /* let Alluser = await repository.find();
    res.json({
        message:"user find",
        data: Alluser,
    })
 */
    /* ---findone find data using by id */
    /* let Finduser = await repository.findOne(2);
    res.json({
        message:"one user data find",
        data: Finduser,
    }) */

    /* ---trucate */
    /* let deletedata = await repository.clear();
    res.json({
        message:"user trucate",
        data: deletedata,
    }) */



    // 3. crud perform using findquery
    // const getdata = getRepository(User)

    /* ---select data using select */
    /* let data = await getdata.find({
        select:["Name"]
    })
    res.json({
        message:"user find using find",
        data: data,
    }) */
   
    /* ---find data using where */
    /* let data = await getdata.find({
        where: {
            Name:"mina"
        }
    })
    res.json({
        message:"user find using where",
        data: data,
    }) */

    /* ---find data using or */
    /* let data = await getdata.find({
        where: [{
            Name:"mina"
        },
            {
            Name:"rinkal"
        }]
    })
    res.json({
        message:"user find using or",
        data: data,
    })
    */
    
    /* ---find data using order (skip,take) */
    /* let data = await getdata.find({
        order: {
            id:"DESC"
        },
        skip: 2,
        take:4
    })
    res.json({
        message:"user find using order",
        data: data,
    }) */

    /* ---find data using NOT,Lessthen,Equal,like */
    /* let data = await getdata.find({
        // Name: Not("vina"),
        // id: LessThan(2),
        // id:Equal(7)
        Name:Like('%r%')
    })
    res.json({
        message:"user find using Not,Lessthan,Equal,Like",
        data: data,
    }) */



    // 4. crud perform using custom repositopry
    /* const UserRepository = getCustomRepository(Userrepo);
    let data = await UserRepository.customSave("mishri","nayak")
    res.json({
        message:"user insert",
        data: data,
    }) */



    // 5. crud perform using relation

    // one to one relation
    // const getmanager = getManager()

    // insert in employee
    /* const emp = new Employee();
    emp.gender = "male";
    emp.address = "benguluru";
    emp.photo = "ur8j.jpeg";
    let data = await getmanager.save(emp);

    // insert in department
    const department = new Department();
    department.name = "MERNSTACK";
    department.profile = emp;
    await getmanager.save(department);

    res.json({
        message: "user insert using relation",
        data:data
    }) */

    // 1. one to many insert

    // insert in student
   /*  const studnet = new Student();
    studnet.std_name = "arraayn";
    let data = await getmanager.save(studnet);

    // insert in photo1
    const photo1 = new Photo();
    photo1.url = "https://www.youtube.com/watch?v=capG52wsRfk&list=PLolI8AY2AS9aNM8SScV0Jh-it4KUHsAgU&index=12";
    photo1.student = studnet
    await getmanager.save(photo1);

    // insert in photo2
    const photo2 = new Photo();
    photo2.url = "https://www.youtube.com/watch?v=capG52wsRfk&list=PLofoie9lI8AY2AS9aNM8SScV0Jh-it4KUHsAgU&index=12";
    photo2.student = studnet
    await getmanager.save(photo2)

    res.json({
        message: "user insert using relation",
        data:photo1,photo2
    }) */
    

    /* // 2. many to one insert

    // insert in photo1
    const photo1 = new Photo();
    photo1.url = "https://www.youtube.com/watch?v=capG52wsRfk&list=PLolI8AY2AS9aNM8SScV0Jh-it4KUHsAgU&index=12";
    await getmanager.save(photo1);

    // insert in photo2
    const photo2 = new Photo();
    photo2.url = "https://www.youtube.com/watch?v=capG52wsRfk&list=PLofoie9lI8AY2AS9aNM8SScV0Jh-it4KUHsAgU&index=12";
    await getmanager.save(photo2)

    // insert in student 
    const studnet = new Student();
    studnet.std_name = "missionmata";
    studnet.photos = [photo1,photo2]
    let data = await getmanager.save(studnet);

    res.json({
        message: "user insert using relation",
        data:photo1,photo2
    }) */
    
   /*  // 3. many to many insert
    const game1 = new Game();
    game1.name = "Jumpjacking"
    await getmanager.save(game1);

    const game2 = new Game();
    game2.name = "badminton"
    await getmanager.save(game2);

    const question1 = new Question();
    question1.title = "games 1 data here";
    question1.option = "this is question data"
    question1.games = [game1, game2]
    await getmanager.save(question1)

    res.json({
        message: "user insert using relation",
        data:game1,game2
    }) */



    // 6 find data using one to one relation
    
    // let repo = getRepository(Department);
    // simple data
    // let data = await repo.find({ relations: ["profile"] })

    // inverse
    // let repo = getRepository(Employee);
    // let data = await repo.find({ relations: ["profile"] })

    /* let data = await getmanager
    .getRepository(Employee)
    .createQueryBuilder("department")
    .leftJoinAndSelect("department.profile", "profile")
    .getMany() */
    
    // reverse
    /* let data = await getmanager
    .getRepository(Department)
    .createQueryBuilder("employee")
    .leftJoinAndSelect("employee.profile", "profile")
    .getMany()
    
    res.json({
        message:"one to one find",
        data:data
    }) */

    /* // 7. find data using one to many relation
    let repo = getRepository(Photo);
    let data = await repo.find({ relations: ["student"] });

    // reverse 
    let repo = getRepository(Student);
    let data = await repo.find({ relations: ["photos"] });

    res.json({
        message: "find one to many",
        data:data
    }) */

    // 8. many to many
   /*  let questionrepo = getmanager.getRepository(Question);
    // here games is filedname of question table
    let data = await questionrepo.find({ relations: ["games"] })
    res.json({
        message: "many to many find",
        data:data
    }) */

    // 9. QUERY BUILDER
    const getmanager = getManager();
    
    // select
    /* let data = await getmanager
        .createQueryBuilder()
        .select("userdata")
        .from(Department, "userdata")
        // .getMany();
        // .getOne();
        // .getRawMany();
        // .getCount();
        // .getManyAndCount(); */
    
    /* let data = await getmanager
    .getRepository(Employee)
    .createQueryBuilder("empdata")
    .where("empdata.id=:id OR address = :add", { id: 4, add: "bengluru" })
    .orderBy("empdata.address")
    .limit(1)
    .offset(1)
    .getMany() */
    
   /*  let data = await getmanager
    .getRepository(Employee)
    .createQueryBuilder("empdata")
    .leftJoinAndSelect("empdata.profile","profile","empdata.gender = :gender",{gender:"female"})
    .where("empdata.id=:id OR address = :add", { id: 1, add: "bengluru" })
    .orderBy("empdata.address")
    .getMany()
    res.json({
        message: "find data in querybuilder",
        data:data
    }) */

    // insert
   /*  let data = await getmanager
        .createQueryBuilder()
        .insert()
        .into(Department)
        .values([
            {
                name: "ANDROID DEVELOPER"
            },
            {
                name: "DESIGNER PHOTOSHOP"
            }
        ])
        .execute();
    
    res.json({
        message: "data insert",
        data:data
    }) */

    // update
    /* let data = await getmanager
        .createQueryBuilder()
        .update(Department)
        .set({ name:"FULLSTACK DEVELOPER" })
        .where("id=:id", { id: 2 })
        .execute()
    
    res.json({
        message: "data update",
        data:data
    }) */


    // delete
    /* let data = await getmanager
    .createQueryBuilder()
    .delete()
    .from(Employee)
    .where("id=:id", { id: 3 })
    .execute()
    res.json({
        message: "user delete",
        data:data
    }) */


    
}

export {
    Userdata
}