import { Request, Response } from "express";
import { User } from "../entity/User";
import { Equal, getCustomRepository, getManager, getRepository, LessThan, Like, Not } from "typeorm";
import { Userrepo } from "../repo/Userrepository";

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
    const repository = getRepository(User) 

    /* ---insert data using insert */
    /* let data = await repository.insert({
        Name:"mina",
        email: "dave@gmail.com",
    })
    res.json({
        message:"user insert",
        data: data,
    }) */

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
    const getdata = getRepository(User) 

    /* ---select data using select */
    /* let data = await getdata.find({
        select:["Name"]
    })
    res.json({
        message:"user insert",
        data: data,
    }) */

    /* ---find data using where */
    /* let data = await getdata.find({
        where: {
            Name:"mina"
        }
    })
    res.json({
        message:"user insert",
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
        message:"user insert",
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
        message:"user insert",
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
        message:"user insert",
        data: data,
    }) */


    // 4. crud perform using custom repositopry

    /* const UserRepository = getCustomRepository(Userrepo);
    let data = await UserRepository.customSave("mishri","nayak")
    res.json({
        message:"user insert",
        data: data,
    }) */
}

export {
    Userdata
}