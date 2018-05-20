class _30_GeneratingRandomNumbers
{
	public static void main(String[] args)
	{
		float random = (float) Math.random();
		System.out.println("Random number: " + random);

		float multiplied = random * 10;
		System.out.println("Multiplied number: " + multiplied);

		int randomInt = (int) Math.ceil(multiplied);
		System.out.println("Random Integer: " + randomInt);

		System.out.println("");

		int[] nums = new int[60];
		for (int i = 1; i < 60; i++) {nums[i] = i;}

		for (int i = 1; i < 60; i++)
		{
			int r = (int) Math.ceil(Math.random() * 59);
			int temp = nums[i];
			nums[i] = nums[r];
			nums[r] = temp;
		}
		
		for (int i = 1; i < 7; i++)
		{
			System.out.print(Integer.toString(nums[i]) + "   ");
		}
	}
}


