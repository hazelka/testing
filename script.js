try {
  document.getElementById('testing').innerHTML = process.env.HELLO;
} catch(error) {
  console.log(error);
}
