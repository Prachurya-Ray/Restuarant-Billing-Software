import React from "react";
import { Select, Button } from "antd";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const { Option } = Select;

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div>
      <label htmlFor={title} className="block text-sm font-medium text-gray-700">
        {title}
      </label>

      <div className="mt-1 relative">
        <Select
          value={currency}
          onChange={setCurrency}
          className="w-full"
          dropdownClassName="custom-dropdown"
        >
          {favorites.map((currency) => (
            <Option className="bg-gray-200" value={currency} key={currency}>
              {currency}
            </Option>
          ))}
          <Option disabled>──────────</Option>
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <Option value={currency} key={currency}>
                {currency}
              </Option>
            ))}
        </Select>

        <Button
          onClick={() => handleFavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
          type="text"
        >
          {isFavorite(currency) ? <HiStar /> : <HiOutlineStar />}
        </Button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
