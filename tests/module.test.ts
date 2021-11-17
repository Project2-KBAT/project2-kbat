import { mockModulePartially } from './helpers';

import * as module from '../src/module';

const { foo } = module;

describe('test suite', () => {
    beforeEach(function () {
        jest.resetModules();
    });

    it('do not mock bar 1', async () => {
        expect(foo()).toEqual('foobar');
    });

    it('mock bar', async () => {
        mockModulePartially('../src/module', () => ({
            bar: jest.fn().mockImplementation(() => 'BAR')
        }));
        const module = await import('../src/module');
        const { foo } = module;
        expect(foo()).toEqual('fooBAR');
    });

    it('do not mock bar 2', async () => {
        expect(foo()).toEqual('foobar');
    });
});