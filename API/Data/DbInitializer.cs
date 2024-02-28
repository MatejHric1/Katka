using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Produkty.Any()) return;

            var Produkty = new List<Produkt>
            {
               		new Produkt
                {
                    Meno = "Angular Speedster Board 2000",
                    Popis =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 20000,
                    FotkaUrl = "/images/products/sb-ang1.png",
                    Znacka = "Angular",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Green Angular Board 3000",
                    Popis = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Cena = 15000,
                    FotkaUrl = "/images/products/sb-ang2.png",
                    Znacka = "Angular",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Core Board Speed Rush 3",
                    Popis =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Cena = 18000,
                    FotkaUrl = "/images/products/sb-core1.png",
                    Znacka = "NetCore",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Net Core Super Board",
                    Popis =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Cena = 30000,
                    FotkaUrl = "/images/products/sb-core2.png",
                    Znacka = "NetCore",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "React Board Super Whizzy Fast",
                    Popis =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 25000,
                    FotkaUrl = "/images/products/sb-react1.png",
                    Znacka = "React",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Typescript Entry Board",
                    Popis =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 12000,
                    FotkaUrl = "/images/products/sb-ts1.png",
                    Znacka = "TypeScript",
                    Typ = "Boards",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Core Blue Hat",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1000,
                    FotkaUrl = "/images/products/hat-core1.png",
                    Znacka = "NetCore",
                    Typ = "Hats",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Green React Woolen Hat",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 8000,
                    FotkaUrl = "/images/products/hat-react1.png",
                    Znacka = "React",
                    Typ = "Hats",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Purple React Woolen Hat",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1500,
                    FotkaUrl = "/images/products/hat-react2.png",
                    Znacka = "React",
                    Typ = "Hats",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Blue Code Gloves",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1800,
                    FotkaUrl = "/images/products/glove-code1.png",
                    Znacka = "VS Code",
                    Typ = "Gloves",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Green Code Gloves",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1500,
                    FotkaUrl = "/images/products/glove-code2.png",
                    Znacka = "VS Code",
                    Typ = "Gloves",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Purple React Gloves",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1600,
                    FotkaUrl = "/images/products/glove-react1.png",
                    Znacka = "React",
                    Typ = "Gloves",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Green React Gloves",
                    Popis =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 1400,
                    FotkaUrl = "/images/products/glove-react2.png",
                    Znacka = "React",
                    Typ = "Gloves",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Redis Red Boots",
                    Popis =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Cena = 25000,
                    FotkaUrl = "/images/products/boot-redis1.png",
                    Znacka = "Redis",
                    Typ = "Boots",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Core Red Boots",
                    Popis =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Cena = 18999,
                    FotkaUrl = "/images/products/boot-core2.png",
                    Znacka = "NetCore",
                    Typ = "Boots",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Core Purple Boots",
                    Popis =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Cena = 19999,
                    FotkaUrl = "/images/products/boot-core1.png",
                    Znacka = "NetCore",
                    Typ = "Boots",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Angular Purple Boots",
                    Popis = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Cena = 15000,
                    FotkaUrl = "/images/products/boot-ang2.png",
                    Znacka = "Angular",
                    Typ = "Boots",
                    QuantityInStock = 100
                },
                new Produkt
                {
                    Meno = "Angular Blue Boots",
                    Popis =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Cena = 18000,
                    FotkaUrl = "/images/products/boot-ang1.png",
                    Znacka = "Angular",
                    Typ = "Boots",
                    QuantityInStock = 100
                },
            };
            
            foreach (var Produkt in Produkty)
            {
                context.Produkty.Add(Produkt);
            }

            context.SaveChanges();
        }
    }
}