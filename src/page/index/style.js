import styled from 'styled-components'

export  const Per=styled.div`
margin-top: -0.88rem;
height: calc(~'100% - 2.7rem');
.personalInfo-bar{
    height: 2.06rem;
    width: 91.5%;
    padding: 0.32rem;
    margin: 0rem 4.25%;
    background:@fff-color;
    border-radius:4px;
    .photo{
        float: left;
        height:1.2rem;
        width: 1rem;
        margin-top: 0.05rem;
        border-radius: 50%;
        overflow: hidden;
        background: #f5f5f5;
        img{
            display:block;
            height: 100%;
            width: 100%;
        }
        i{
            margin-left: .1rem;
            font-size: .8rem;
            color: #d4d4d4;
        }
    }
    .personalInfo-entries{
        float: left;
        width: 76%;
        margin-left: 0.2rem;
        .name{
            font-size:0.32rem;
            color:@333-color;
            letter-spacing:0;
            text-align:left;
            .r-border{
                display: inline-block;
                height: .28rem;
                border-right: 1px solid #c5c5c5;
            }
        }

        .tittles{
            width: 100%;
            font-size:0.28rem;
            letter-spacing:0;
            text-align:left;
            overflow-x: scroll;
            white-space:nowrap;
            .orgname{
                display: block;
                width: 100%;
                padding-right: 0.08rem;
                overflow-x: hidden;
                white-space: nowrap;
                word-break: break-all;
                text-overflow: ellipsis
            }

            .postname{
                margin-left: 0.1rem;
            }
        }
        .days{
            overflow-x: scroll;
            white-space:nowrap;
            width: 100%;
            font-size:0.24rem;
            color:#888888;
            letter-spacing:0;
            text-align:left;
            span{
                color: #0caef5;
            }
        }
    }
`