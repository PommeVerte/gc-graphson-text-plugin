import init from '../src/index.js';
import GremlinConsole from 'gremlin-console';

describe('index.js .init()', () => {
    it('should create a client with default options', () => {
        const plugin = init();
        plugin.constructor.name.should.eql('GraphSONTextPlugin');
    });
});


describe('integration', () => {
    it('should be loaded by the console', () => {
        document.body.innerHTML = __html__['test/index.html'];
        const gc = GremlinConsole("#window", "#input");
        const plugin = init();
        gc.register(plugin);

        gc.initClient();
        gc.client.constructor.name.should.eql('DriverClient');
    });
});
