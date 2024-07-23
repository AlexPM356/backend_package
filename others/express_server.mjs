export const esModuleExpress = "import express from 'express';\n\n"+

"const app = express();\n"+
"const PORT = process.env.PORT || 3000;\n\n"+

"app.get('/', (req, res) =>{\n"+
"    console.log('Express with ES Module');\n"+
"});\n\n"+

"app.listen(PORT, () => {\n"+
"    console.log(`Server running on port ${PORT}`);\n"+
"    console.log('----------------------------------------------');\n"+
"});"