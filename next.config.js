module.exports = {
  //set redirect for banner button
    async redirects() {
      return [
        {
          source: '/peliculas',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }