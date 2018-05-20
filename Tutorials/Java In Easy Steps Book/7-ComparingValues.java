class _7_ComparingValues
{
	public static void main(String[] args)
	{
		String txt = "Super";
		String lang = "Java";

		boolean state = (txt == lang);
		System.out.println(state);

		state = (txt != lang);
		System.out.println(state);



		int dozen = 12; 
		int score = 20;

		state = (dozen > score);
		System.out.println(state);

		state = (dozen < score);
		System.out.println(state);
	}
}