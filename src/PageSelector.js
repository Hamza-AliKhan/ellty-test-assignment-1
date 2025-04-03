import React, { useState } from "react";
import { Card, CardContent, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState({
    all: false,
    pages: {
      page1: false,
      page2: false,
      page3: false,
      page4: false,
    },
  });

  const handleAllChange = (event) => {
    const checked = event.target.checked;
    setSelectedPages({
      all: checked,
      pages: {
        page1: checked,
        page2: checked,
        page3: checked,
        page4: checked,
      },
    });
  };

  const handlePageChange = (event) => {
    const { name, checked } = event.target;
    const newPages = { ...selectedPages.pages, [name]: checked };
    const allChecked = Object.values(newPages).every((val) => val);
    
    setSelectedPages({
      all: allChecked,
      pages: newPages,
    });
  };

  return (
    <Card sx={{ width: 300, padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPages.all}
                onChange={handleAllChange}
              />
            }
            label="All pages"
          />
          {Object.keys(selectedPages.pages).map((page) => (
            <FormControlLabel
              key={page}
              control={
                <Checkbox
                  name={page}
                  checked={selectedPages.pages[page]}
                  onChange={handlePageChange}
                />
              }
              label={page.replace("page", "Page ")}
            />
          ))}
        </FormGroup>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FFC107", color: "black", width: "100%", marginTop: 2 }}
        >
          Done
        </Button>
      </CardContent>
    </Card>
  );
};

export default PageSelector;
