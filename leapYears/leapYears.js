function leapYears(x)
{
  if(x % 4 == 0)
    {
      if(x % 100 == 0)
        {
          if(x % 400 == 0)
            {
              return true;
            }
          else
            {
              return false;
            }
        }
      else
        {
          return true;
        }
    }
  else
    {
      return false;
    }
}

module.exports = leapYears
