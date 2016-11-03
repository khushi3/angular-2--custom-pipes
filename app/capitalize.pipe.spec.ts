import {
	async,
	inject,
	getTestBed,
	TestBed
} from '@angular/core/testing';

import { CapitalizePipe } from './capitalize.pipe';

describe('Pipe: CapitalizePipe', () => {
	let pipe;

	//setup
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			 declarations: [ CapitalizePipe ],
			providers: [
			CapitalizePipe
			]
		});
	}));

	beforeEach(inject([CapitalizePipe], p => {
		pipe = p;
	}));

	//specs
	// it('should throw if not used with a string', () => {
	// 	//must use arrow function for expect to capture exception
	// 	expect(()=>pipe.transform(null)).toThrow();
	// 	expect(()=>pipe.transform(undefined)).toThrow();
	// 	expect(()=>pipe.transform()).toThrow();
	// 	expect(()=>pipe.transform()).toThrowError('Requires a String as input');
	// 	// expect(()=>pipe.transform()).toThrowError(BaseException);
	// 	// expect(()=>pipe.transform()).toThrowError(BaseException, 'Requires a String as input');
	// });

	// it('should work with empty string', () => {
		// 	expect(pipe.transform('')).toEqual('');
		// });
		it('should capitalise', () => {
			expect(pipe.transform('wow')).toEqual('WOW');
		});
	}) 