class _29_RoundingNumbers
{
	public static void main(String[] args)
	{
		float num = 7.25f;
		
		System.out.println(num + " rounded is " + Math.round(num));
		System.out.println(num + " floored is " + Math.floor(num));
		System.out.println(num + " ceiled is " + Math.ceil(num));
		
		float num1 = 24.75f;
		float num2 = 25f;
		
		System.out.println("Most is " + Math.max(num1, num2));
		System.out.println("Least is " + Math.min(num1, num2));
	}
}