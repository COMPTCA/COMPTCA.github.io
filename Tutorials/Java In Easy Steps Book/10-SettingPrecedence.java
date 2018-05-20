class _10_SettingPrecedence
{
	public static void main(String[] args)
	{
		int sum = 32 - 8 + 16 * 2;
		System.out.println(sum);
		
		sum = (32 - 8 + 16) * 2;
		System.out.println(sum);
		
		sum = (32 - (8 + 16)) * 2;
		System.out.println(sum);
	}
}