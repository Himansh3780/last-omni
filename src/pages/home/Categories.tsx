import { getToolsByCategory } from '@tools/index';
import Grid from '@mui/material/Grid';
import { Box, Card, CardContent, Stack, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { categoriesColors } from 'config/uiConfig';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { getI18nNamespaceFromToolCategory } from '@utils/string';
import { useUserTypeFilter } from '../../providers/UserTypeFilterProvider';

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const SingleCategory = function ({
  category,
  index
}: {
  category: ArrayElement<ReturnType<typeof getToolsByCategory>>;
  index: number;
}) {
  const { t } = useTranslation(getI18nNamespaceFromToolCategory(category.type));
  const navigate = useNavigate();
  const theme = useTheme();
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => setHovered((prevState) => !prevState);

  // Get translated category title and description
  const categoryTitle = t(`categories.${category.type}.title`, category.title);
  const categoryDescription = t(
    `categories.${category.type}.description`,
    category.description
  );
  const seeAllText = t('translation:categories.seeAll', 'See all {{title}}', {
    title: categoryTitle
  });
  const tryText = t('translation:categories.try', 'Try {{title}}', {
    //@ts-ignore
    title: t(category.example.title)
  });

  return (
    <Grid
      item
      xs={12}
      md={6}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      sx={{ p: 1 }}
    >
      <Card
        sx={{
          height: '100%',
          background: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.03)' 
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(16px)',
          borderRadius: 6,
          border: '1px solid',
          borderColor: hovered 
            ? 'rgba(129, 140, 248, 0.4)' 
            : 'rgba(255, 255, 255, 0.1)',
          boxShadow: hovered 
            ? '0 20px 40px rgba(0,0,0,0.15)' 
            : '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: hovered ? 'translateY(-10px) scale(1.02)' : 'none',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <CardContent sx={{ height: '100%', p: 4 }}>
          <Stack
            direction={'column'}
            height={'100%'}
            justifyContent={'space-between'}
            spacing={3}
          >
            <Box>
              <Stack direction={'row'} spacing={3} alignItems={'center'}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    background: hovered 
                      ? theme.palette.primary.main 
                      : 'rgba(129, 140, 248, 0.1)',
                    color: hovered ? 'white' : theme.palette.primary.main,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon
                    icon={category.icon}
                    fontSize={'40px'}
                  />
                </Box>
                <Box>
                  <Typography 
                    variant="h5" 
                    fontWeight={800}
                    sx={{ 
                      color: theme.palette.text.primary,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {categoryTitle}
                  </Typography>
                </Box>
              </Stack>
              <Typography 
                sx={{ 
                  mt: 3, 
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  fontSize: '1rem'
                }}
              >
                {categoryDescription}
              </Typography>
            </Box>
            
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate('/categories/' + category.type)}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '0.95rem'
                }}
              >
                {seeAllText}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate(category.example.path)}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  borderWidth: '2px',
                  '&:hover': { borderWidth: '2px' }
                }}
              >
                {tryText}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default function Categories() {
  const { selectedUserTypes } = useUserTypeFilter();
  const { t } = useTranslation();
  const categories = getToolsByCategory(selectedUserTypes, t);

  return (
    <Grid width={'80%'} container spacing={2}>
      {categories.map((category, index) => (
        <SingleCategory key={category.type} category={category} index={index} />
      ))}
    </Grid>
  );
}
