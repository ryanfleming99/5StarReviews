document.addEventListener("DOMContentLoaded", function() {
  const jsonData = [
    {
      name: "Curaprox Swiss 5460 Ultra Soft Toothbrush",
      description:
        "Ultra soft toothbrushes with 0.10 mm bristles, assorted colors, pack of 3.",
      price: "£18.99",
      imageUrl:
        "https://m.media-amazon.com/images/I/817at2VVYHL._AC_UL320_.jpg",
      stars: "★★★★★",
      url: "https://amzn.to/3UkWnGf"
    },
    {
      name: "Nimbus® Microfine® Toothbrush",
      description:
        "High-quality microfine toothbrushes by Nimbus, assorted regular colors.",
      price: "£56.55",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://m.media-amazon.com/images/I/812XqaoiFZS._AC_UL320_.jpg"
    },
    {
      name: "Norwex Toothbrush Refills Medium",
      description: "Medium bristle toothbrush refills by Norwex.",
      price: "£26.59",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://amzn.to/3UkWnGf"
    },
    {
      name: "Siskiyou Sports NHL unisex MVP Toothbrush",
      description: "NHL-themed unisex MVP toothbrush by Siskiyou Sports.",
      price: "£13.82",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://amzn.to/3UkWnGf"
    },
    {
      name: "RADIUS Kids Toothbrush Totz Plus",
      description:
        "3 pack assorted colors toothbrush for children 3 years and up, BPA free and ADA accepted, by RADIUS.",
      price: "£17.95",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://amzn.to/3UkWnGf"
    },
    {
      name: "Curaprox CS 5460 Manual Toothbrush Special Edition",
      description:
        "Ultra soft special edition 'Love 2023' pack of 2 manual toothbrushes.",
      price: "£27.73",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://amzn.to/3QMb4kL"
    },
    {
      name: "Oral-B Clic Manual Toothbrush",
      description:
        "Coral colored manual toothbrush with replaceable brush head, by Oral-B.",
      price: "£28.91",
      imageUrl: "https://via.placeholder.com/150",
      stars: "★★★★★",
      url: "https://amzn.to/3UkWnGf"
    }
    // Add more products as necessary...
  ];

  const templateSource = document.getElementById("product-template").innerHTML;
  const template = Handlebars.compile(templateSource);
  const compiledHtml = template(jsonData);

  document.getElementById("products").innerHTML = compiledHtml;
});
