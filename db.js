import Sequelize from 'sequelize';

export const sequelize = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: 'test.sqlite'
});

export const User = sequelize.define('user', {
  username: { type: Sequelize.STRING }
});

export const Artist = sequelize.define('artist', {
  name: { type: Sequelize.STRING }
});

export const Song = sequelize.define('song', {
  name: { type: Sequelize.STRING },
  played: { type: Sequelize.INTEGER }
});

// Relaciones de artistas con canciones
Artist.hasMany(Song);
Song.belongsTo(Artist);

sequelize.sync({ force: true }).then(() => {
  // Crea aquí tus datos de prueba
});
