import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // margin: 5px;
`
export const TxtLoginDiv = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

`


export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    max-width: 95%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;



`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const EsqueciText  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
` 

export const CriarText =  styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    padding: 0px 5px;
    color: #23DD7A;
`


/* Já tenho conta. Fazer login */


