import * as module from './module';

function foo(): string {
    return `foo${module.bar()}`;
}

function bar(): string {
    return 'bar';
}

export { foo, bar };