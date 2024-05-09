const setupEnv = (): void => {
    console.log("\nSetup test environment");
    process.env.ENV1 = "test";
    console.log("process.env.ENV1", process.env.ENV1);
};

export default setupEnv;