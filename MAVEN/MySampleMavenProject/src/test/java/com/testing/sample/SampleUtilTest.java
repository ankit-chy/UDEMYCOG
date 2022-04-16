package com.testing.sample;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SampleUtilTest {
	@Test
	public void testadd() {
		System.out.println("add");
		Integer a = 15;
		Integer b = 25;
		Integer expresult = 40;
		Integer result = SampleUtil.add(a, b);
		assertEquals(expresult, result );
		assertEquals(null, SampleUtil.add(15, null));
		assertEquals(null, SampleUtil.add(null, 15));
		assertEquals(null, SampleUtil.add(null, null));
		
	}
}
