class _8_AssessingLogic
{
	public static void main(String[] args)
	{
		boolean yes = true;
		boolean no = false;

		boolean result = (yes && yes);
		System.out.println(result);

		result = (yes && no);
		System.out.println(result);



		result = (yes || yes);
		System.out.println(result);

		result = (yes || no);
		System.out.println(result);

		result = (no || no);
		System.out.println(result);



		result = yes;
		System.out.println(result);

		result = !yes;
		System.out.println(result);
	}
}
