const { FuseBox, LESSPlugin, CSSResourcePlugin, CSSPlugin } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    useTypescriptCompiler: true,
    plugins:[LESSPlugin(),CSSResourcePlugin(), CSSPlugin()]
});

fuse.bundle("app")
    .sourceMaps(true)

fuse.run();