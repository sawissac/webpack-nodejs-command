require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });

console.log("mode =",process.env.WP_MODE);
console.log("watch =",process.env.WP_WATCH?true:false);