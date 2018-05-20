class _19_LoopContinueStatements
{
	public static void main(String[] args)
	{
	
		for (int i = 1; i < 4; i++)
		{
			for (int j = 1; j < 4; j++)
			{
				System.out.println("Running i=" + i + " j=" + j);
			}
		}
		
		System.out.println("...");
		
		outerloop : for (int i = 1; i < 4; i++)
		{
			for (int j = 1; j < 4; j++)
			{
				if (i == 2 && j == 3)
				{
					System.out.println("Breaks outerloop when i=" + i + " j=" + j);
					break outerloop;
				}
				if (i == 1 && j == 1)
				{
					System.out.println("Continues outerloop when i=" + i + " j=" + j);
					continue outerloop;
				}
				System.out.println("Running i=" + i + " j=" + j);
			}
		}
		
	}
}