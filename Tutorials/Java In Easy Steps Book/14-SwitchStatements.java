class _14_SwitchStatements
{
	public static void main(String[] args)
	{
		int month = 2, year = 2018, num = 31;
		switch(month)
		{
			case 4 : case 6 : case 9 : case 11: num = 30; break;
			case 2 : num = (year % 4 == 0) ? 29 : 28; break;
		}
		System.out.println(month + "/" + year + ": " + num + "days");
	}
}
//		switch (test_variable)
//		{
//			case value_1 : if true do this; break;
//			case value_2 : if true do this; break;
//			case value_3 : if true do this; break;
//			default : if false do this;
//		}