class _18_LoopBreakStatements
{
	public static void main(String[] args)
	{
	
		for (int i = 1; i < 4; i++)
		{
			for (int j = 1; j < 4; j++)
			{
				System.out.println("running i=" + i + " j=" + j);
			}
		}
		System.out.println("...");
		for (int i = 1; i < 4; i++)
		{
			for (int j = 1; j < 4; j++)
			{
				if (i == 2 && j == 1)
				{
					System.out.println("Breaks innerLoop when i=" + i + " j=" + j);
					break;
				}
				System.out.println("running i=" + i + " j=" + j);
			}
		}
		
	}
}
