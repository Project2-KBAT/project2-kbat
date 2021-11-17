export function mockModulePartially(
    modulePath: string,
    mocksCreator: (originalModule: any) => Record<string, any>
): void {
    const testRelativePath = path.relative(path.dirname(expect.getState().testPath), __dirname);
    const fixedModulePath = path.relative(testRelativePath, modulePath);
    jest.doMock(fixedModulePath, () => {
        const originalModule = jest.requireActual(fixedModulePath);
        return { ...originalModule, ...mocksCreator(originalModule) };
    });
}