// const faker = require('faker');

// const seedArray = [] // you need an array

// for (let i = 0; i < 1000; i++) {
//     // create new object
//   const newObj = {
//     name: faker.name.findName(),
//     label: faker.company.companyName(),
//     genre: faker.music.genre(),
//     releaseYear: faker.random.number(),
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//   }
//   seedArray.push(newObj);
//   console.log(seedArray);
// };

const { User, Song } = require('./models');

async function createNewSong(title, duration, play) {
    // 1 Create a pet
    try {
        const user1 = await User.findOne({
            where: { id: 1 }, 
            include: [Song]
        });
        console.log(user1.toJSON());

        const newSong = await user1.createSong({ title, duration, play });
        console.log(newSong.toJSON());

 

    } catch (error) {
        console.log(error);
    }
}

createNewSong('Hey', 330, 223);

// async function addSongToUser() {
//     // get the first pet
//     const foundSong = await Song.findOne({
//         where: { id: 1 },
//         include: [User]
//     });
//     console.log(foundSong.toJSON());

//     // get the first toy
//     const foundUser = await User.findOne({
//         where: { id: 1 }
//     });
//     console.log(foundUser.toJSON());

//     // add a toy to a pet (toy -> pet)
//     let result = await foundSong.addSong(foundUser); // beacause of the association
//     console.log('final result:', result);

// }

// addSongToUser();