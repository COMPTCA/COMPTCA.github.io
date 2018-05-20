class _21_CreatingArrays
{
	public static void main(String[] args)
	{
		int[] num = new int[3];
		num[0] = 100;
		num[1] = 200;
		
		String[] str = {"Much", "More", "Java"};
		str[1] = "Better";
		
		System.out.println("String array length is " + str.length);
		System.out.println("Integer array length is " + num.length);
		System.out.println(num[0] + "," + num[1] + "," + num[2]);
		System.out.println(str[0] + str[1] + str[2]);
	}
}
