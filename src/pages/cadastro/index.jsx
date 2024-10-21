import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPhoto } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleCadastro, SubtitleCadastro, CriarText, Row, Wrapper, TxtLoginDiv } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}&nome=${formData.nome}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch (e) {
            alert('Houve um erro ao realizar o cadastro. Por favor, tente novamente.');
        }
        
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column flex="1">
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column flex="4">
                <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome Completo" leftIcon={<MdPhoto />} name="nome"  control={control} />
                    {errors.nome && <span>Nome Completo é Obrigatório</span>}

                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <TxtLoginDiv>
                    <Row>
                    <SubtitleCadastro>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </SubtitleCadastro>
                    </Row>
                    <Row>
                        Já Tenho conta.
                        <CriarText>Fazer Login</CriarText>
                    </Row>
                </TxtLoginDiv>
                
                </Wrapper>
                    
            </Column>
        </Container>
    </>)
}

export { Cadastro }

