async function fetchTest(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('fel vid hämtning av produkterna');
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Något gick fel', error);
  }
}

fetchTest('https://dummyjson.com/products/categories');
