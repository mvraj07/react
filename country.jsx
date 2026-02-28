import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CountryCard } from "../layout/UI/CountryCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { DropdownMenu } from "../layout/UI/DropdownMenu";

export const Country = () => {
  const countries = useLoaderData();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [dropname, setDropname] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleDropdownSelection = (e) => {
    setDropname(e.target.name);
    setToggleMenu(false);
    setFilteredCountries(filteredCountriesReturn(e));
  };
  const filteredCountriesReturn = (e) => {
    const region = e.target.name.toLowerCase();
    if (region === "all") {
      return countries;
    } else {
      return countries.filter((curCountry) => {
        if (curCountry.region.toLowerCase() === region) return curCountry;
      });
    }
  };
  const handleButtonClicks = (e) => {
    if (e.target.name === "ascending") {
      console.log("logic reached");
      const ctrs = [...filteredCountries];
      ctrs.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setFilteredCountries(ctrs);
    } else if (e.target.name === "descending") {
      const ctrs = [...filteredCountries];
      ctrs.sort((a, b) => b.name.common.localeCompare(a.name.common));
      setFilteredCountries(ctrs);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };  
  const ctries = filteredCountries.filter((country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  });

  return (
    <div className="country-section">
      <div className="features container">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search for Country"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="ascending-filter">
          <button onClick={handleButtonClicks} name="ascending">
            Asc
          </button>
        </div>
        <div className="descending-filter">
          <button onClick={handleButtonClicks} name="descending">
            Desc
          </button>
        </div>
        <div
          className="Sort-filter"
          onMouseEnter={() => setToggleMenu(true)}
          onMouseLeave={() => setToggleMenu(false)}
        >
          <div className="dropdown">
            <button>
              {dropname}
              <IoIosArrowDropdownCircle />
            </button>
            {toggleMenu ? (
              <DropdownMenu handleDropdownSelection={handleDropdownSelection} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="container cards">
        {search
          ? ctries.map((curCountry) => {
              // console.log(curCountry);
              return (
                <CountryCard
                  curCountry={curCountry}
                  key={curCountry.name.common}
                />
              );

              // console.log(curCountry);
            })
          : filteredCountries.map((curCountry) => {
              // console.log(curCountry);
              return (
                <CountryCard
                  curCountry={curCountry}
                  key={curCountry.name.common}
                />
              );
              // console.log(curCountry);
            })}
      </div>
    </div>
  );
};
