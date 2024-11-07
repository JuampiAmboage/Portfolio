"use client"
import React, { useEffect, useRef } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let ballX = width / 2;
    let ballY = height / 2;
    let ballSpeedX = 4;
    let ballSpeedY = 4;
    const ballRadius = 10;

    const paddleWidth = 20;
    const paddleHeight = 75;
    let leftPaddleY = (height - paddleHeight) / 2;
    let rightPaddleY = (height - paddleHeight) / 2;
    const paddleSpeed = 4;
    const returnSpeed = 2; // Speed at which paddles return to center

    const drawRect = (x, y, w, h, color) => {
      context.fillStyle = color;
      context.fillRect(x, y, w, h);
    };

    const drawCircle = (x, y, radius, color) => {
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2, true);
      context.fill();
    };

    const draw = () => {
      drawRect(0, 0, width, height, '#1b1b1b'); // Clear screen
      drawRect(10, leftPaddleY, paddleWidth, paddleHeight, 'white'); // Left paddle
      //drawRect(width / 2 - 1, 0, 2, height, 'white');
      drawRect(width - 30, rightPaddleY, paddleWidth, paddleHeight, 'white'); // Right paddle
      drawCircle(ballX, ballY, ballRadius, 'white'); // Ball
    };

    const update = () => {
      ballX += ballSpeedX;
      ballY += ballSpeedY;

      // Ball collision with top and bottom
      if (ballY + ballRadius > height || ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
      }

      // Ball collision with paddles
      if (ballX - ballRadius < paddleWidth) {
        if (ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        }
      }

      if (ballX + ballRadius > width - paddleWidth) {
        if (ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
          ballSpeedX = -ballSpeedX;
        }
      }

      // Ball out of bounds
      if (ballX + ballRadius > width || ballX - ballRadius < 0) {
        ballX = width / 2;
        ballY = height / 2;
        ballSpeedX = -ballSpeedX;
      }

      // Move paddles automatically
      if (ballSpeedX < 0 && ballX < width / 2) {
        if (leftPaddleY + paddleHeight / 2 < ballY) {
          leftPaddleY += paddleSpeed;
        } else {
          leftPaddleY -= paddleSpeed;
        }
      } else {
        if (leftPaddleY < (height - paddleHeight) / 2) {
          leftPaddleY += returnSpeed;
        } else if (leftPaddleY > (height - paddleHeight) / 2) {
          leftPaddleY -= returnSpeed;
        }
      }

      if (ballSpeedX > 0 && ballX > width / 2) {
        if (rightPaddleY + paddleHeight / 2 < ballY) {
          rightPaddleY += paddleSpeed;
        } else {
          rightPaddleY -= paddleSpeed;
        }
      } else {
        if (rightPaddleY < (height - paddleHeight) / 2) {
          rightPaddleY += returnSpeed;
        } else if (rightPaddleY > (height - paddleHeight) / 2) {
          rightPaddleY -= returnSpeed;
        }
      }
    };

    const gameLoop = () => {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    };

    gameLoop();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <canvas ref={canvasRef} width="500" height="300" style={{ border: '1px solid white' }} />
    </div>
  );
};

export default PongGame;