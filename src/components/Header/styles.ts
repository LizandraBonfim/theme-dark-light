import styled from 'styled-components';

export const HeaderContainer = styled.header`
    
    padding: .2rem 0;

    svg:nth-child(3)  > *{
        fill: ${props =>
        props.theme.title === 'dark' ? 'var(--color-rosa)' : props.theme.color.svg};
    }

`;

export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    span{
        background: var(--color-instagram);
        border-radius: 50%;
        padding: 0 0.3rem;
        top: -7px;
        right: -9px;
        color: var(--color-branco);
        position: absolute;
        font-size: 13px;
        align-items: center;
    }
    p{
        font-size: .9rem;
    }
                
    
`;


export const HeaderTop = styled.nav`
    
    box-shadow: 0px 1px 0 0  ${props => props.theme.color.primary};

`;

export const HeaderTopContent = styled.div`
    
    display: grid;
    grid-template-columns: minmax(8rem , 14rem) 1fr;
    padding: 0.4rem;

    @media (max-width: 40rem) {
        font-size: .8rem;
        grid-template-columns:  1fr;

        ul{
            display: none;
        }
    }
`;

export const RedesSociais = styled.ul`
    display: flex;
        
       li{
     
        cursor: pointer;
        
        + li{
            margin-left: .5rem;
        }
           
    }

`;

export const Contatos = styled(DisplayFlex)`

    p{
        font-size: 0.9rem;
        
    }
    a{
        margin-left: 1rem;
    }
`;

export const BotaoToggle = styled.div`

    display: flex;
    align-items: center;
    position: relative;

`;

