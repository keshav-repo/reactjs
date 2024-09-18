const fetchProduct = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mock product data
            const mockProducts = {
                1: { id: 1, name: "Laptop", price: 1200 },
                2: { id: 2, name: "Smartphone", price: 800 },
                3: { id: 3, name: "Headphones", price: 150 },
            };

            const product = mockProducts[productId];
            if (product) {
                resolve(product);
            } else {
                reject("Product not found");
            }
        }, 2000); // Simulates a 2-second delay for the "API call"
    });
};

export default fetchProduct;