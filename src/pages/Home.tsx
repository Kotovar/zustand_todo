import { css } from '@emotion/react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from '@tanstack/react-router';
export function Home() {
  const navigate = useNavigate();

  const main = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <main css={main}>
      <Box
        marginBlock='auto'
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginTop={4}
      >
        <h1>Get started!</h1>
        <Button
          variant='contained'
          size='large'
          onClick={() => navigate({ to: '/signin' })}
        >
          Sign In
        </Button>
      </Box>
    </main>
  );
}
