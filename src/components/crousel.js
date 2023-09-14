import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
function Carousel() {
    const reduceRecipes = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
      };
      
    return (
      <div >
         <div>
    <Box>
      <h3>Breakfast Recipes</h3>
      <Carousel>
        {recipes.reduce(reduceRecipes, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {item.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.photo_location} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  </div>
      </div>
    );
  }
  
  export default Carousel;