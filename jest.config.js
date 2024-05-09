module.exports = {
    clearMocks: true,
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    roots: ["<rootDir>/src"],
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleDirectories: ["node_modules", "<rootDir>"],
    globalSetup: "<rootDir>/src/tests/setupEnv.ts",
};