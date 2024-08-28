import test from 'supertape';
import fs from "fs";
import {createMockImport} from "mock-import";

const {
    mockImport,
    reImport,
    stopAll,
} = createMockImport(import.meta.url);

const mockExampleRepoWithDto = (dto) => {
    mockImport('../src/repos/exampleRepo.js',{
        getById: async () => {return dto}
    });
}

test('Example test: success', async (t) => {
    const exampleDTO = JSON.parse(fs.readFileSync("./test/fixtures/example.json"))
    mockExampleRepoWithDto(exampleDTO)
    const {ExampleService} = await reImport("../src/services/exampleService.js");
    const exampleService = new ExampleService();
    const res = await exampleService.getById("123")
    t.ok(res.success,"Success");
    stopAll()
    t.end();
});

