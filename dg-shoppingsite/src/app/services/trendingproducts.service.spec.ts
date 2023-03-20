import { TestBed } from '@angular/core/testing';

import { TrendingproductsService } from './trendingproducts.service';

describe('TrendingproductsService', () => {
  let service: TrendingproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/*

[
  {
    "Id": 22815,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP1",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/SdAlT45mKP1ewLGzL-C4yLF5aFtaLgwNGHVKf9YBVDKVsGpqWoiH5WW4uP-1XWkFqmqx_h3Jb3ewF2ptE6ozElUq0908JAXZJuQWCzTeFaNArOwloJ4-Mxh-_3MlHY7chN-D7Ztm_w=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/SdAlT45mKP1ewLGzL-C4yLF5aFtaLgwNGHVKf9YBVDKVsGpqWoiH5WW4uP-1XWkFqmqx_h3Jb3ewF2ptE6ozElUq0908JAXZJuQWCzTeFaNArOwloJ4-Mxh-_3MlHY7chN-D7Ztm_w=w400-h400"
  },
  {
    "Id": 22816,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP2",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/ERaMFO2NDnKzX3ViNqX3rtR5H7to6fHkqBLVSVOMWAzBpldVBr9Hn3F4aEKwC5UecZW1ATJQnQwOo_QjaQCRt1xTPu4euM40kWeFOE3VW4AovfLptrKeHQ_QgW9an_lCXGEIvYDf3w=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ERaMFO2NDnKzX3ViNqX3rtR5H7to6fHkqBLVSVOMWAzBpldVBr9Hn3F4aEKwC5UecZW1ATJQnQwOo_QjaQCRt1xTPu4euM40kWeFOE3VW4AovfLptrKeHQ_QgW9an_lCXGEIvYDf3w=w400-h400"
  },
  {
    "Id": 22817,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP3",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/jcP0XUibJ6JEGKX6_IuXShxUvS7gDSjWwTN_bUyiV_0RWYZaxGsVqVyazA5_AFlTAnJX7UEme-EDKWuVAIvWjvAf6OZrM5h8LU03-8sjIMvhI3vojE3gya-JSA3UhBGF6UrcxbHpAA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/jcP0XUibJ6JEGKX6_IuXShxUvS7gDSjWwTN_bUyiV_0RWYZaxGsVqVyazA5_AFlTAnJX7UEme-EDKWuVAIvWjvAf6OZrM5h8LU03-8sjIMvhI3vojE3gya-JSA3UhBGF6UrcxbHpAA=w400-h400"
  },
  {
    "Id": 22818,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP4",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/HQFtoGhjXj9BHiWi2jbbbAIEUyhHbhO_IWDoMTcK3-holVHJo8okKxtQyL4GiaQnmc7GN0rv6VQTPD6iVx2tW0TlLoAIA0C5df17As0oxVgDVXc09iHh6V2gCQmwFYPK894mABrbaQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/HQFtoGhjXj9BHiWi2jbbbAIEUyhHbhO_IWDoMTcK3-holVHJo8okKxtQyL4GiaQnmc7GN0rv6VQTPD6iVx2tW0TlLoAIA0C5df17As0oxVgDVXc09iHh6V2gCQmwFYPK894mABrbaQ=w400-h400"
  },
  {
    "Id": 22819,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP5",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/wtFnaHtr9wZddFV76DJkKh39AM2OHXW-YsIxVGmn4sL42DPuyuUrFHTC-rwz6C8SDp2SKt6mQugJtogtiXXwCOx1fWNOxHN5Dh2D65EGXGJCbT4B9_hBP3EdJkzGPVEHFLHZxnhxEw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/wtFnaHtr9wZddFV76DJkKh39AM2OHXW-YsIxVGmn4sL42DPuyuUrFHTC-rwz6C8SDp2SKt6mQugJtogtiXXwCOx1fWNOxHN5Dh2D65EGXGJCbT4B9_hBP3EdJkzGPVEHFLHZxnhxEw=w400-h400"
  },
  {
    "Id": 22820,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP6",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/Sgc_rmGntZfpvLly2SHDK2FSjfU4gWeo-RSL-TYUmehy1ArwGBtliRNRvX7g_Psay0eNxe5Q068yj9FAu_LAic_4x0-02EGdB8mcHC5kGc9fIe9R2yc4RAWmiqaa0dzvS-KoKGu1Lg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Sgc_rmGntZfpvLly2SHDK2FSjfU4gWeo-RSL-TYUmehy1ArwGBtliRNRvX7g_Psay0eNxe5Q068yj9FAu_LAic_4x0-02EGdB8mcHC5kGc9fIe9R2yc4RAWmiqaa0dzvS-KoKGu1Lg=w400-h400"
  },
  {
    "Id": 22821,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP7",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/fAaVxDu-FZOUYbK1fmoDhNYXmWYRX_dQah4W20gsVSkffVx7mbM2BupOfmKPqVCXtUNtU2MVa5vPXUGCSwdxT3ZuP6_E-PR3ZW_VZB_L4d7l35vtqjLY0jWbFt3oTQOJ2jMSW7Vekg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/fAaVxDu-FZOUYbK1fmoDhNYXmWYRX_dQah4W20gsVSkffVx7mbM2BupOfmKPqVCXtUNtU2MVa5vPXUGCSwdxT3ZuP6_E-PR3ZW_VZB_L4d7l35vtqjLY0jWbFt3oTQOJ2jMSW7Vekg=w400-h400"
  },
  {
    "Id": 22822,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP8",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/mjyky1TiNBgy0HNCvfxNfMzDbod1IuRER7XWsdZ58fsYKD1P8KcuGu54-dfGpnpbUS5qbx2L_j-XUROaugwv_v--9q2wkqkEluCdnOr9NbckG-PaiXmNdzzNEhE7NiexinMTMvov-A=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/mjyky1TiNBgy0HNCvfxNfMzDbod1IuRER7XWsdZ58fsYKD1P8KcuGu54-dfGpnpbUS5qbx2L_j-XUROaugwv_v--9q2wkqkEluCdnOr9NbckG-PaiXmNdzzNEhE7NiexinMTMvov-A=w400-h400"
  },
  {
    "Id": 22823,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP9",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/vJ52tJfz-uG0D5QpM_1FPhJK6R6giGgaRfMS4x4uJ9x6B6I_cRfKt6vqLbcyOFlkq4RjXjyo245_Wbvh6E7c7C24gW-8oFApxojB4nX6Cu56VBEqkHED2jRjfUFbe_YqCa05Xj2oDw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/vJ52tJfz-uG0D5QpM_1FPhJK6R6giGgaRfMS4x4uJ9x6B6I_cRfKt6vqLbcyOFlkq4RjXjyo245_Wbvh6E7c7C24gW-8oFApxojB4nX6Cu56VBEqkHED2jRjfUFbe_YqCa05Xj2oDw=w400-h400"
  },
  {
    "Id": 22824,
    "Name": "Printed Pashmina Silk Sarees",
    "ProductCode": "PSHKBKP10",
    "CustomerPrice": 2700,
    "PhotoUrl": "https://lh3.googleusercontent.com/tiLNVOJ_abFJv5E6EnCH6vqCHSJ2VA40rBOiDLk1QcWkZjU_3CFYV9zTiejX5PQSy8tc8GcWUnQC577t9xSRuZVDGa47-bCHdZ0jG2DBU1kod1tj7Xt4-T_wtacmCKOTmXJ6uA8fpQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/tiLNVOJ_abFJv5E6EnCH6vqCHSJ2VA40rBOiDLk1QcWkZjU_3CFYV9zTiejX5PQSy8tc8GcWUnQC577t9xSRuZVDGa47-bCHdZ0jG2DBU1kod1tj7Xt4-T_wtacmCKOTmXJ6uA8fpQ=w400-h400"
  }
]

*/

/*
All Products


[
  {
    "Id": 31,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL8",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/Y18QWCC-DgQFPh7mUBrnanAGtS_x30rZAoAQLvLIL071KDqsqsps7zV4jWQBeRR9bOojO8KQXiD8jpsnyiWkAXWFTrV0c1gLhR7ePpZtCgoHyh6mv1jJFesvIIZ7IcHtVVJ8MQCqqLY=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Y18QWCC-DgQFPh7mUBrnanAGtS_x30rZAoAQLvLIL071KDqsqsps7zV4jWQBeRR9bOojO8KQXiD8jpsnyiWkAXWFTrV0c1gLhR7ePpZtCgoHyh6mv1jJFesvIIZ7IcHtVVJ8MQCqqLY=w400-h400"
  },
  {
    "Id": 29,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL6",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/hc4v4TYzsB192xAmdWkzgGTux6XKyX7SX4nx4VRqlME-03c27611lRTb00CX-uX-lzo9-RTt_WpTfSeKa0kBnYkDOEwA_PNjHyJ4Cf1lsAbm1U06J-jHKH-izV3djmQj1EOVFtiI5bI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/hc4v4TYzsB192xAmdWkzgGTux6XKyX7SX4nx4VRqlME-03c27611lRTb00CX-uX-lzo9-RTt_WpTfSeKa0kBnYkDOEwA_PNjHyJ4Cf1lsAbm1U06J-jHKH-izV3djmQj1EOVFtiI5bI=w400-h400"
  },
  {
    "Id": 13,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL12",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/OaDlgxcXGJo5gCxpAXprVHpbjnGMwlbBycBLi_Xfz9moOD4s85sp9VNh4nkpw8V9lFWIb9fLoxpmgLI5gkJaBG3QyoXM8yJQGsEJAo2LzFGsDHUTgciretUqXFzSLyOmY-ithFM311I=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/OaDlgxcXGJo5gCxpAXprVHpbjnGMwlbBycBLi_Xfz9moOD4s85sp9VNh4nkpw8V9lFWIb9fLoxpmgLI5gkJaBG3QyoXM8yJQGsEJAo2LzFGsDHUTgciretUqXFzSLyOmY-ithFM311I=w400-h400"
  },
  {
    "Id": 15,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL14",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/kPyejvkXPxRBymRgJM5Ry-pcHBAN12mD2MYhDKs2EZ6qWi76PHqdbKTgCVAJzXnY3HRhdkmk-jWfqFf--bcKJD3UJyCDujMlt1VJfpH3zk0McfLrAh-vT384a13o61PGKzSCtOCRCU8=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/kPyejvkXPxRBymRgJM5Ry-pcHBAN12mD2MYhDKs2EZ6qWi76PHqdbKTgCVAJzXnY3HRhdkmk-jWfqFf--bcKJD3UJyCDujMlt1VJfpH3zk0McfLrAh-vT384a13o61PGKzSCtOCRCU8=w400-h400"
  },
  {
    "Id": 19,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL4",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/hkqHiRkNoB106BsSRwz1PUZ6zcspLZNFwKC18L1Sx_9jlrLTFYgLnJC0Fj71ytw9_5yCzm9ab4YyUAxIdgLjia4jufTxfdON8nhKJyYHphErnGG81v8m3BQsswuicEMAvs1nLDFmj4o=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/hkqHiRkNoB106BsSRwz1PUZ6zcspLZNFwKC18L1Sx_9jlrLTFYgLnJC0Fj71ytw9_5yCzm9ab4YyUAxIdgLjia4jufTxfdON8nhKJyYHphErnGG81v8m3BQsswuicEMAvs1nLDFmj4o=w400-h400"
  },
  {
    "Id": 2,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL1",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/whDKs_4qd8hAtP6s0reRoU3y1SsupGbK9ypQgPF4LQYP3O-JoH-JDiDUOdlqki-8kAHOeDRDwkIzsB8cC674Yk6Fl7jDJRJxFcawSIowZMTa0FrZXs9tExqN2Zd3rx7UUWx-gyL6bzs=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/whDKs_4qd8hAtP6s0reRoU3y1SsupGbK9ypQgPF4LQYP3O-JoH-JDiDUOdlqki-8kAHOeDRDwkIzsB8cC674Yk6Fl7jDJRJxFcawSIowZMTa0FrZXs9tExqN2Zd3rx7UUWx-gyL6bzs=w400-h400"
  },
  {
    "Id": 25,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL2",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/FShPLwJgPXOKPp71NiJW-u_HRO0VETeQmQQk-QuLk5JJQdGqUcCR88i0IzQ6bLlNMXl7gCpExbHO8I4w0fPsaWydTOTM78BJbU7MGcq7FexidMrx-eW5G8SGgTsZMV6qGZwMZpKuioQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/FShPLwJgPXOKPp71NiJW-u_HRO0VETeQmQQk-QuLk5JJQdGqUcCR88i0IzQ6bLlNMXl7gCpExbHO8I4w0fPsaWydTOTM78BJbU7MGcq7FexidMrx-eW5G8SGgTsZMV6qGZwMZpKuioQ=w400-h400"
  },
  {
    "Id": 6,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL5",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/hVcG_W9HS0QOpPVo6kaahH3jNKcOBaF_zwKFi37-ptGXVS72nC-sFli2phlud2pz_riO7HpXtmJJbKJFimUd038R19e_4ONwT7cDTSKw2f5QYSTILyOGfWjg1Kip1ZXuK1SCMdRMFnQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/hVcG_W9HS0QOpPVo6kaahH3jNKcOBaF_zwKFi37-ptGXVS72nC-sFli2phlud2pz_riO7HpXtmJJbKJFimUd038R19e_4ONwT7cDTSKw2f5QYSTILyOGfWjg1Kip1ZXuK1SCMdRMFnQ=w400-h400"
  },
  {
    "Id": 7,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL6",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/OSvrFDFypyY1t6cXcVTwSwuA7q4UvNnnkLtPd7JqEq_cV_Y2ciUnQEcH4X_PVMRXvdTWTicCag50RI3TV4kAaqQYS9dbV8NhivHvbwu7384-Tq1eqULrrWLzkUngTap9_9xPhGYh4kc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/OSvrFDFypyY1t6cXcVTwSwuA7q4UvNnnkLtPd7JqEq_cV_Y2ciUnQEcH4X_PVMRXvdTWTicCag50RI3TV4kAaqQYS9dbV8NhivHvbwu7384-Tq1eqULrrWLzkUngTap9_9xPhGYh4kc=w400-h400"
  },
  {
    "Id": 4,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL3",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/D8sYEIFU_lNW00TI7sW4vhiSQqjGqlV-MsIHM4yis7I4iKIP8czaXzY-qbCDJe6iKs356JPudPYqwRcV9dZlrySNWwqVYjzyLsBMETFnDF1Ook2H4eNaK79YEDpyDxj40X6uP9r_d6s=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/D8sYEIFU_lNW00TI7sW4vhiSQqjGqlV-MsIHM4yis7I4iKIP8czaXzY-qbCDJe6iKs356JPudPYqwRcV9dZlrySNWwqVYjzyLsBMETFnDF1Ook2H4eNaK79YEDpyDxj40X6uP9r_d6s=w400-h400"
  },
  {
    "Id": 39,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL4",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/ilc5QD954g0zW-_S4jr1QPcfojxl1AsbvM-hRG_Oqo7ev72LTYn1ZscspQHPXnfkEvQRrmnEiAt8zMo9d9zctBc-oQVoBOJuqmXw9cDa2qMTii9l3KeF2HX52lVfcrc6gwlzgE154RQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ilc5QD954g0zW-_S4jr1QPcfojxl1AsbvM-hRG_Oqo7ev72LTYn1ZscspQHPXnfkEvQRrmnEiAt8zMo9d9zctBc-oQVoBOJuqmXw9cDa2qMTii9l3KeF2HX52lVfcrc6gwlzgE154RQ=w400-h400"
  },
  {
    "Id": 28,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL5",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/BsNxNSm-9nPlIb88c3FtmPSx3cedDzuVqrgpGr-FqndACzMrOK-ySf9jxx3EQjKSj12H3p7w3Lny02_JOUfJ60Dw0b3pVnvf9Xw_daNadirVF_FzV0B--FOgG-OEBmIjcYjWzDfRC40=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/BsNxNSm-9nPlIb88c3FtmPSx3cedDzuVqrgpGr-FqndACzMrOK-ySf9jxx3EQjKSj12H3p7w3Lny02_JOUfJ60Dw0b3pVnvf9Xw_daNadirVF_FzV0B--FOgG-OEBmIjcYjWzDfRC40=w400-h400"
  },
  {
    "Id": 27,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL4",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/wGJTSQjZA9WwwJITHEqPZAFlwdDDrcWuRoyqSXuiB5ewcU-z7Ji2NMntbJ749e0cdFEzdK50TfgUlcMYZNTehr2wTqwCiFBaG3hyCxowB5iKIPNVhm6vwiHARo2wYcHdzYZ8fL1CXiI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/wGJTSQjZA9WwwJITHEqPZAFlwdDDrcWuRoyqSXuiB5ewcU-z7Ji2NMntbJ749e0cdFEzdK50TfgUlcMYZNTehr2wTqwCiFBaG3hyCxowB5iKIPNVhm6vwiHARo2wYcHdzYZ8fL1CXiI=w400-h400"
  },
  {
    "Id": 14,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL13",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/kG3SwH2vzoqIUL19ifozFXsDuI7mH5eUqd96rY2uWpwwUx-d6t7bsJu9StGdojSt3XaeGIEFRGAfDxgLyGeY2tt1Ui4QKTkU6EX5lTa3DbcpPliSFDW6H_CyklcdJlTJ7ZGpHFdX0zc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/kG3SwH2vzoqIUL19ifozFXsDuI7mH5eUqd96rY2uWpwwUx-d6t7bsJu9StGdojSt3XaeGIEFRGAfDxgLyGeY2tt1Ui4QKTkU6EX5lTa3DbcpPliSFDW6H_CyklcdJlTJ7ZGpHFdX0zc=w400-h400"
  },
  {
    "Id": 36,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL1",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/uMFETKNQAr4uTf4Kpjq39HKrLb5VlO6zzwOSG609vbzCD2MmWxL4jnB_tl1p95Llf-1pvpEnbQ1ikEKYqX-x6AKcVKz0BZE90JJ1o41H3ROdHOX5EmvZPh9k06ReQpypCSQutq-5cXg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/uMFETKNQAr4uTf4Kpjq39HKrLb5VlO6zzwOSG609vbzCD2MmWxL4jnB_tl1p95Llf-1pvpEnbQ1ikEKYqX-x6AKcVKz0BZE90JJ1o41H3ROdHOX5EmvZPh9k06ReQpypCSQutq-5cXg=w400-h400"
  },
  {
    "Id": 33,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL10",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/31mnQagRh-ajhi53xdM-ysYce83iXQc6SeEOHXu335RunRjinnpY2npbul6IJhcKbIyqxPRFOlvCI8_cvfqf8du_iKd4I__YN4QRPothCxhTScQ7uZ81eUQRU-D6flnjwkapbfBRdeQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/31mnQagRh-ajhi53xdM-ysYce83iXQc6SeEOHXu335RunRjinnpY2npbul6IJhcKbIyqxPRFOlvCI8_cvfqf8du_iKd4I__YN4QRPothCxhTScQ7uZ81eUQRU-D6flnjwkapbfBRdeQ=w400-h400"
  },
  {
    "Id": 23,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL8",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/RvJFKzZoU3-DJR2m-uwhdg9OOCB5xY1b_Rxtqz6lgt2z54k_HoYXUIY78uo4xkzB43iqTwnZbQ9Dun3acSDUxkhu69CbJnU_zsYuV8_HLIukQ7KgDy0J4TL061E3d_Yh5wTWru4Nu4s=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/RvJFKzZoU3-DJR2m-uwhdg9OOCB5xY1b_Rxtqz6lgt2z54k_HoYXUIY78uo4xkzB43iqTwnZbQ9Dun3acSDUxkhu69CbJnU_zsYuV8_HLIukQ7KgDy0J4TL061E3d_Yh5wTWru4Nu4s=w400-h400"
  },
  {
    "Id": 5,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL4",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/XJeu6zngfeTj2R9GCPUgPlvwN_E-1KxsIy9xGkWuL8i6hrKN8gWmtJnl3LXZK2Zk8rK1oWzaSnk_9_4Plf8pu_4R_DtnIa2lCEUUnlFA6hTKTaSqSz2Dp1h1r-LMyRtugA1keWqnvkM=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/XJeu6zngfeTj2R9GCPUgPlvwN_E-1KxsIy9xGkWuL8i6hrKN8gWmtJnl3LXZK2Zk8rK1oWzaSnk_9_4Plf8pu_4R_DtnIa2lCEUUnlFA6hTKTaSqSz2Dp1h1r-LMyRtugA1keWqnvkM=w400-h400"
  },
  {
    "Id": 9,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL8",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/DugB89yVR9DEKfNLFALmpCjXNKJdYv12B59VOSYBJh77AHk4uQtw4eZWf1mrebSdbRK5RCF89wZ3ycDh5HzDcblsivg8417TWyMxFy7QxaASBVjyl2-VeCNXzUNbNvOO94K_FTRylDI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/DugB89yVR9DEKfNLFALmpCjXNKJdYv12B59VOSYBJh77AHk4uQtw4eZWf1mrebSdbRK5RCF89wZ3ycDh5HzDcblsivg8417TWyMxFy7QxaASBVjyl2-VeCNXzUNbNvOO94K_FTRylDI=w400-h400"
  },
  {
    "Id": 3,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL2",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/HSMYDIH4Wd27HklXUjcwUOLtMLpkIUtvsD8rKALp7SJ6hQj8jJhOx1ddl8ivYSX5ES2O1CaqAVhtURtttSO0BdFXHk-262EAvAY4nAj0ZtDaBLVn4W48J5oM907uOcshsiV79oLHojE=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/HSMYDIH4Wd27HklXUjcwUOLtMLpkIUtvsD8rKALp7SJ6hQj8jJhOx1ddl8ivYSX5ES2O1CaqAVhtURtttSO0BdFXHk-262EAvAY4nAj0ZtDaBLVn4W48J5oM907uOcshsiV79oLHojE=w400-h400"
  },
  {
    "Id": 8,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL7",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/doaajp3BgL6CDKgvYD2N2in1lQb8xcb8rx_FE6_ToldUDPb2tQ8SgvagByGYrLWc4pZTPgTNN6l5LVkEuKpikAgASEXfbwGmnuXAo3IUubn4w9KdthsgCWk_9ACtcb5XbFCxttErMEw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/doaajp3BgL6CDKgvYD2N2in1lQb8xcb8rx_FE6_ToldUDPb2tQ8SgvagByGYrLWc4pZTPgTNN6l5LVkEuKpikAgASEXfbwGmnuXAo3IUubn4w9KdthsgCWk_9ACtcb5XbFCxttErMEw=w400-h400"
  },
  {
    "Id": 30,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL7",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/2Bi3m6kd730n9rb4T9BAauCKwEzLb79--Nhfbx-Uz28AtHThK1yX9IlqCuMrRtcqozxeNCI0mXTuxJXt8-eFC6MLsdd188byo3ueNLuWRO6YHdE1p6y1I1jJhV0vghjmwc-a9woFV-I=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/2Bi3m6kd730n9rb4T9BAauCKwEzLb79--Nhfbx-Uz28AtHThK1yX9IlqCuMrRtcqozxeNCI0mXTuxJXt8-eFC6MLsdd188byo3ueNLuWRO6YHdE1p6y1I1jJhV0vghjmwc-a9woFV-I=w400-h400"
  },
  {
    "Id": 32,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL9",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/G0uyABYOaPUgOYLDyIKKWaLIHBnrw4ryvK83pSwC3lwgs4r6YihligYmLEG6eFIdAONr-3_8Jn98PQlR23KyXLS3adxKnxtNjf557hQKDf_Ea6DbXkQL5wfop356dP1uXjVa4rADNsU=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/G0uyABYOaPUgOYLDyIKKWaLIHBnrw4ryvK83pSwC3lwgs4r6YihligYmLEG6eFIdAONr-3_8Jn98PQlR23KyXLS3adxKnxtNjf557hQKDf_Ea6DbXkQL5wfop356dP1uXjVa4rADNsU=w400-h400"
  },
  {
    "Id": 35,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL12",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/xFDKqo6MOrGG-8Rc03002eGcLiVrAAXHIdv2TjlrzARW0FINf0PjQ-f2qPnEdAywNSuV6gJqZOAZb7W8NvpVNmCzo4brtkZuBWNb5482a5LoO2vw-s_IehqqIFZWJKO1HGKqcrgdY4I=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/xFDKqo6MOrGG-8Rc03002eGcLiVrAAXHIdv2TjlrzARW0FINf0PjQ-f2qPnEdAywNSuV6gJqZOAZb7W8NvpVNmCzo4brtkZuBWNb5482a5LoO2vw-s_IehqqIFZWJKO1HGKqcrgdY4I=w400-h400"
  },
  {
    "Id": 11,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL10",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/mj8GclhqBuZ7PRXYWdTSgz3Ny3tYQxk7CY-lghJUDJT7IzWvBaX9KHr30u5NQ2_Kt5TlyYt9ifZqGxNpa6yu6xBemGepfMoyNCZ6liVt8fPZ3ORCKUmySMZv1oWaIwdbzH7YjD0pc3E=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/mj8GclhqBuZ7PRXYWdTSgz3Ny3tYQxk7CY-lghJUDJT7IzWvBaX9KHr30u5NQ2_Kt5TlyYt9ifZqGxNpa6yu6xBemGepfMoyNCZ6liVt8fPZ3ORCKUmySMZv1oWaIwdbzH7YjD0pc3E=w400-h400"
  },
  {
    "Id": 17,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL2",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/IsKUm9hzNcpR-mumGoR80Izg1mjRwSXQGIsriG2Q6j_TmPqKbUSNuCFUtBWpf8pkMXQUEpBUnKFfCApidKkGfwxdgAeJyi-UrEvyMquiiJf-fO2-yxA1W2zUiLq5waWOeiYPipR0tZs=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/IsKUm9hzNcpR-mumGoR80Izg1mjRwSXQGIsriG2Q6j_TmPqKbUSNuCFUtBWpf8pkMXQUEpBUnKFfCApidKkGfwxdgAeJyi-UrEvyMquiiJf-fO2-yxA1W2zUiLq5waWOeiYPipR0tZs=w400-h400"
  },
  {
    "Id": 45,
    "Name": "Printed Khadi Dupion Sets 28AL",
    "ProductCode": "KDS19AL2",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/I_hN6e6FQNnCfGil-Na_BPlm2pjtn71297CydhzRQ8OaJdUYL8ARVGDhKPsvzHO4JxdM5zeZwbRliZ0AdZ3nyvuvZnScthzG0oVChwCdKs5lBnrgtBSLmhL_R2KDkhAeb0Lbv1GttLw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/I_hN6e6FQNnCfGil-Na_BPlm2pjtn71297CydhzRQ8OaJdUYL8ARVGDhKPsvzHO4JxdM5zeZwbRliZ0AdZ3nyvuvZnScthzG0oVChwCdKs5lBnrgtBSLmhL_R2KDkhAeb0Lbv1GttLw=w400-h400"
  },
  {
    "Id": 40,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL5",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/X2Y9NU3Pr5Mp4Y68zyYNXJW8mdQ52cT52pakaMa5lgVcjeeAB8HnO0LaxiZklclgURFzsOC58QA2sWH-_OEzMwO_9U7XQVIVUCEZsICPiRy-0Wrbg0LUWlvHN_QaEuonvd96wiZkSus=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/X2Y9NU3Pr5Mp4Y68zyYNXJW8mdQ52cT52pakaMa5lgVcjeeAB8HnO0LaxiZklclgURFzsOC58QA2sWH-_OEzMwO_9U7XQVIVUCEZsICPiRy-0Wrbg0LUWlvHN_QaEuonvd96wiZkSus=w400-h400"
  },
  {
    "Id": 53,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL4",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/bRJm7fOPhx1R-LJcvvudqCPc5nDbTIiRkRi4wM502QesrLRMvv6U10quyoxlE43BJWhEStWkuyJd5z0wlvLI0MEgJ51W6ndwWPxf_CMXwFODi2gaDtHdj2LbIDbQRFWVjvyC5wbimUA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/bRJm7fOPhx1R-LJcvvudqCPc5nDbTIiRkRi4wM502QesrLRMvv6U10quyoxlE43BJWhEStWkuyJd5z0wlvLI0MEgJ51W6ndwWPxf_CMXwFODi2gaDtHdj2LbIDbQRFWVjvyC5wbimUA=w400-h400"
  },
  {
    "Id": 43,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL8",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/CIbDPA2NQsVHSUSRmPLQaXKiBrnMlUvsaSmx7d1w-kY7V6VaTTXCo1HxvCSoGow16iAaQR8kwAXwYM3bswq2sU89bK4phKEUbZEoJrrSpk7Vpn9FnU-NGBd18lMclufcw3K-wwoSW6g=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/CIbDPA2NQsVHSUSRmPLQaXKiBrnMlUvsaSmx7d1w-kY7V6VaTTXCo1HxvCSoGow16iAaQR8kwAXwYM3bswq2sU89bK4phKEUbZEoJrrSpk7Vpn9FnU-NGBd18lMclufcw3K-wwoSW6g=w400-h400"
  },
  {
    "Id": 24,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL1",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/V5eb6BREGFgBpIq0PzvA-GFtCcfpxz3IBcEWTGvpyMjToMiqFCD9A-ICJN9k8LMTVP3FWKdGVCPgzO67t41HjmnYTFvkARBGcjMyiXlXPqEUHkCEzaP3yCGv6u0qHtV1r69umzQ0wO4=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/V5eb6BREGFgBpIq0PzvA-GFtCcfpxz3IBcEWTGvpyMjToMiqFCD9A-ICJN9k8LMTVP3FWKdGVCPgzO67t41HjmnYTFvkARBGcjMyiXlXPqEUHkCEzaP3yCGv6u0qHtV1r69umzQ0wO4=w400-h400"
  },
  {
    "Id": 48,
    "Name": "Printed Khadi Dupion Sets 28AL",
    "ProductCode": "KDS19AL5",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/23xeH5vp5ZtZd6CxFjG9wyJnqLLxR28kGzfzJPCglAMD6hmqXvbO7Y5Z7LiKVQ0gTafnGYNzmNzCX5Yx5BH63rDo3H9HDEPamFHWV1S2ZaPeiutjMPPbB2FzD3VhddNjJlczXXOMH1g=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/23xeH5vp5ZtZd6CxFjG9wyJnqLLxR28kGzfzJPCglAMD6hmqXvbO7Y5Z7LiKVQ0gTafnGYNzmNzCX5Yx5BH63rDo3H9HDEPamFHWV1S2ZaPeiutjMPPbB2FzD3VhddNjJlczXXOMH1g=w400-h400"
  },
  {
    "Id": 21,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL6",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/67elwoyxIIDb0mnJJ7jRBTKMDU_j4P5H5s24wsXTJSBnFE4wyK3y12mllaMp3F_TSDk4Yg3U2M9mR0mgCmMmhDnoCESV8S1rNNFH8tI9oSL2yZvK1LF8bRrkuRJCjwg8z3UosXtS14c=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/67elwoyxIIDb0mnJJ7jRBTKMDU_j4P5H5s24wsXTJSBnFE4wyK3y12mllaMp3F_TSDk4Yg3U2M9mR0mgCmMmhDnoCESV8S1rNNFH8tI9oSL2yZvK1LF8bRrkuRJCjwg8z3UosXtS14c=w400-h400"
  },
  {
    "Id": 34,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL11",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/v8VWZ-bH_xZqtpsZeM6Ju6LL7z_bYtFqt2pl0AkYCDHyfXUHaG7MJCWix4UPwglG83IV15aYib4ODTVboYGKsuT3eLUBKHcSPt2s9ZLilYkL2A1w1jnbRZmna22AAtPWmiY9II70344=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/v8VWZ-bH_xZqtpsZeM6Ju6LL7z_bYtFqt2pl0AkYCDHyfXUHaG7MJCWix4UPwglG83IV15aYib4ODTVboYGKsuT3eLUBKHcSPt2s9ZLilYkL2A1w1jnbRZmna22AAtPWmiY9II70344=w400-h400"
  },
  {
    "Id": 10,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL9",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/b9tZ-JKcCrQ3K7SgN6WO2qzKoI0sq2asFmev7B28FueiflGEdTOpiRbarLKhVBsc3TN1kWYdTF99zLYv2xzQZgagQ52PF9msH53gsEVURoEYOUwrSgJE0WWQgyI6QKSoWoAOtFysNfE=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/b9tZ-JKcCrQ3K7SgN6WO2qzKoI0sq2asFmev7B28FueiflGEdTOpiRbarLKhVBsc3TN1kWYdTF99zLYv2xzQZgagQ52PF9msH53gsEVURoEYOUwrSgJE0WWQgyI6QKSoWoAOtFysNfE=w400-h400"
  },
  {
    "Id": 38,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL3",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/GzN0X3dhjoHCFHOzPwUOAjiej7FAcldvzZlD2494NtGHTL5MaF1zVMMStz9vtBYMQv9YKajR7RayHS-dFm1bGIYZff3EiJ988bIGDs5Tb6UINY3nH63SNNyI_880jSZt8KHk4SMuE9k=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/GzN0X3dhjoHCFHOzPwUOAjiej7FAcldvzZlD2494NtGHTL5MaF1zVMMStz9vtBYMQv9YKajR7RayHS-dFm1bGIYZff3EiJ988bIGDs5Tb6UINY3nH63SNNyI_880jSZt8KHk4SMuE9k=w400-h400"
  },
  {
    "Id": 16,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL1",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/Pv-yWmdG3zh2yTNP1zspUU5r9BUU1gEa6PZbE1UnXjK4p9rC_e4p7pgoIsn50x_YkP2uGJHu5zEyR-nPL4B0KCHxjeUeEujD12z85y0sjIMFtMcFBXfq8kQwm0crUZ3w_EKNWfDSNOQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Pv-yWmdG3zh2yTNP1zspUU5r9BUU1gEa6PZbE1UnXjK4p9rC_e4p7pgoIsn50x_YkP2uGJHu5zEyR-nPL4B0KCHxjeUeEujD12z85y0sjIMFtMcFBXfq8kQwm0crUZ3w_EKNWfDSNOQ=w400-h400"
  },
  {
    "Id": 18,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL3",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/FwUK1oVkEo-_yfX4vY9zbahwizYT8QjaOS3u9mCdRJW97S7eXfAZD_Ov-QMvXGKQQcilVZVb0etUd2PAUumbKkVvCSr5R3kA4NXpgpqyY2vAvWwXfxXrlvSKWvP-BFtjpebuyFDkCJA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/FwUK1oVkEo-_yfX4vY9zbahwizYT8QjaOS3u9mCdRJW97S7eXfAZD_Ov-QMvXGKQQcilVZVb0etUd2PAUumbKkVvCSr5R3kA4NXpgpqyY2vAvWwXfxXrlvSKWvP-BFtjpebuyFDkCJA=w400-h400"
  },
  {
    "Id": 75,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL6",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/R6sPmfILSKRcaFlEL7_M2KJZ89bOTYdouMpVo1NjrpYvmdPHL4uT3DFcX3OnM_MBiu8GTwAumhOi-zJyUcguH-5wHYNAIZ2C9kJyzIdg8JXeBo2NBuHOvQMS38xljKFm0JM-PkIKokc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/R6sPmfILSKRcaFlEL7_M2KJZ89bOTYdouMpVo1NjrpYvmdPHL4uT3DFcX3OnM_MBiu8GTwAumhOi-zJyUcguH-5wHYNAIZ2C9kJyzIdg8JXeBo2NBuHOvQMS38xljKFm0JM-PkIKokc=w400-h400"
  },
  {
    "Id": 41,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL6",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/8AFAYv_BjAND01n-rt8_OYyfg4gffoB7kMqFS99Sk3U7FqFR5eHDrEXlfIkpvX7bXX0lAkNsc9PQkpZIF6NiI6CYf20AZVlj2R5uYjl3SyYmevB7nLqy7F3g77sVHcSKmenruF5Xptc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/8AFAYv_BjAND01n-rt8_OYyfg4gffoB7kMqFS99Sk3U7FqFR5eHDrEXlfIkpvX7bXX0lAkNsc9PQkpZIF6NiI6CYf20AZVlj2R5uYjl3SyYmevB7nLqy7F3g77sVHcSKmenruF5Xptc=w400-h400"
  },
  {
    "Id": 70,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL1",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/c6ni_9IHvLByfhoB8v2BUlmsvEXbvaK8ym2YwMdTQ835H0cgQNG6hOpbFs7zKrZozoReGpnkKYu48ikJiT50KpaVETK_53bb0Vh2divPmFoHCW66bUFizbbYckaswzN0NPoi3LkUp8E=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/c6ni_9IHvLByfhoB8v2BUlmsvEXbvaK8ym2YwMdTQ835H0cgQNG6hOpbFs7zKrZozoReGpnkKYu48ikJiT50KpaVETK_53bb0Vh2divPmFoHCW66bUFizbbYckaswzN0NPoi3LkUp8E=w400-h400"
  },
  {
    "Id": 79,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL10",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/krooShJ1Rs6fzUGRJmYk5lUoZydfJctHLV7FhJGnCaGoVvq37OgWQEmcAYW1iGmfudbuLS20eYqMf3uCGEJEUQ8w_jXtWZzha4gkL3rJxS-pWdDoxxW1fS02OOoZMY9PWsIPij4BO48=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/krooShJ1Rs6fzUGRJmYk5lUoZydfJctHLV7FhJGnCaGoVvq37OgWQEmcAYW1iGmfudbuLS20eYqMf3uCGEJEUQ8w_jXtWZzha4gkL3rJxS-pWdDoxxW1fS02OOoZMY9PWsIPij4BO48=w400-h400"
  },
  {
    "Id": 62,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL13",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/k8yxdOx1a9iH5JnvDkreFUo2-jvb0FCA7C9lcPMcSwKVvB7ymEPdrMFJe6DvXVc9MxLtMnhYbJujrn5eBW3Ifxi_7IiERMK3RXdRvyvmFP939FIvoiX9dqgpOp1G2yVy4oSd_KP4B_M=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/k8yxdOx1a9iH5JnvDkreFUo2-jvb0FCA7C9lcPMcSwKVvB7ymEPdrMFJe6DvXVc9MxLtMnhYbJujrn5eBW3Ifxi_7IiERMK3RXdRvyvmFP939FIvoiX9dqgpOp1G2yVy4oSd_KP4B_M=w400-h400"
  },
  {
    "Id": 37,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL2",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/k3l0IZmT-NaSavVCCxwJbAk0NDOPzc8wn1ZIdcTNeGV2hVhv5ZaFIBE0F-GvqvR9OhjFM_twlf4oax6K5Nc9wiXd_CGc_lSL4NCxDZxmrwWDLHLatABzp_Uur5WdLRJl2UUzfy8-r9k=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/k3l0IZmT-NaSavVCCxwJbAk0NDOPzc8wn1ZIdcTNeGV2hVhv5ZaFIBE0F-GvqvR9OhjFM_twlf4oax6K5Nc9wiXd_CGc_lSL4NCxDZxmrwWDLHLatABzp_Uur5WdLRJl2UUzfy8-r9k=w400-h400"
  },
  {
    "Id": 22,
    "Name": "Ikkat with Printed Khadi Dupion Dupatta Sets 28 AL",
    "ProductCode": "IKD19AL7",
    "CustomerPrice": 1250,
    "PhotoUrl": "https://lh3.googleusercontent.com/IBFya5jzBacwE5JpCBug5Xbs1hg3DGo24C6dpffafnIGrlXhytwPHjOvzcPEVotCV6GHUlFd65Znd9s85w1m8AwAGzRABlbQ7a-qClQhRnyX8PQ64FBJQC9wfILdA0dEaAwmskQ0E6c=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/IBFya5jzBacwE5JpCBug5Xbs1hg3DGo24C6dpffafnIGrlXhytwPHjOvzcPEVotCV6GHUlFd65Znd9s85w1m8AwAGzRABlbQ7a-qClQhRnyX8PQ64FBJQC9wfILdA0dEaAwmskQ0E6c=w400-h400"
  },
  {
    "Id": 64,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL15",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/_SY7QreabSFrVPUryiQY5VZHbilkSS95GWdmNlyWIVlQ4l4v-_YANrFxb2ZBsEcOx5QoUZMelQeA3P7FgNq6z0ymkHpWL0BdPn1qRtxfrV6FzyRZPcp8CO_e8hcFLoUWybkC-ovmg9E=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/_SY7QreabSFrVPUryiQY5VZHbilkSS95GWdmNlyWIVlQ4l4v-_YANrFxb2ZBsEcOx5QoUZMelQeA3P7FgNq6z0ymkHpWL0BdPn1qRtxfrV6FzyRZPcp8CO_e8hcFLoUWybkC-ovmg9E=w400-h400"
  },
  {
    "Id": 26,
    "Name": "Batik Printed Slub Linen sarees 28 AL",
    "ProductCode": "BSL19AL3",
    "CustomerPrice": 1350,
    "PhotoUrl": "https://lh3.googleusercontent.com/R5_F6f5B8bqM08FaFIdQQmBlogYXR77EAjs8jLhgHwRha1d3bgGknBJ6L5RhVuBxZdwxRHnAZAuWnEqrLO0g1XV6d8ULUyJTX09RQYNADtPT-c9hQei-HEz2FUOzVtnLvSS_T7rRJkg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/R5_F6f5B8bqM08FaFIdQQmBlogYXR77EAjs8jLhgHwRha1d3bgGknBJ6L5RhVuBxZdwxRHnAZAuWnEqrLO0g1XV6d8ULUyJTX09RQYNADtPT-c9hQei-HEz2FUOzVtnLvSS_T7rRJkg=w400-h400"
  },
  {
    "Id": 49,
    "Name": "Printed Khadi Dupion Sets 28AL",
    "ProductCode": "KDS19AL6",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/jEF5qwmlJtHg1s5GD5deqpYAmjjfbUgyY6XnlRRSiZwC_6Sp_bNqYWAgkcWsNs3BY7tUGrU7CkYif90Oql-5v7BCw8kEUa91AecvMh9AJunP11TR-1dfRp9GH_hXiDcWU976B_6KUfI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/jEF5qwmlJtHg1s5GD5deqpYAmjjfbUgyY6XnlRRSiZwC_6Sp_bNqYWAgkcWsNs3BY7tUGrU7CkYif90Oql-5v7BCw8kEUa91AecvMh9AJunP11TR-1dfRp9GH_hXiDcWU976B_6KUfI=w400-h400"
  },
  {
    "Id": 54,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL5",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/ZAbZsSjSDI-EOMPMLUmj2IQgKYrhCd5u3T3uYsWrorbOtAJqiLTba9YD6ufbthB4VgBZebj1uWFEQoX-QRyJaZjK9K5-eSERCnVwuxuZLr-kjpSu29lffdhYR1VNf8yMejh0GOw_H7c=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ZAbZsSjSDI-EOMPMLUmj2IQgKYrhCd5u3T3uYsWrorbOtAJqiLTba9YD6ufbthB4VgBZebj1uWFEQoX-QRyJaZjK9K5-eSERCnVwuxuZLr-kjpSu29lffdhYR1VNf8yMejh0GOw_H7c=w400-h400"
  },
  {
    "Id": 82,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL13",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/FZm9fqlGQtM89H4wzYjwA7-JVvK_NStxE2GbyFbh_unnHUKxbwyDtNfNwPJlS_oazBTL5HiGsEPOyR7nXEYjFfWhDv7ZzR0nKNKxz1PofWdHMBH8aXEoTy22vdLRNH0cTPy7BtSdjqU=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/FZm9fqlGQtM89H4wzYjwA7-JVvK_NStxE2GbyFbh_unnHUKxbwyDtNfNwPJlS_oazBTL5HiGsEPOyR7nXEYjFfWhDv7ZzR0nKNKxz1PofWdHMBH8aXEoTy22vdLRNH0cTPy7BtSdjqU=w400-h400"
  },
  {
    "Id": 74,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL5",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/mAOvgN1dnOXjRl_QLrHhQAZeUK3yIKoZ7ln0KWuN6wAx3upLpoY-7X_stkRYZHastDXzGvlc4Jn-i4Nf90su0bnxn2eJcv2VL_eP9CsjQu3IgQgveRHLMk1oGc2Rvb1dX_CpE147QFc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/mAOvgN1dnOXjRl_QLrHhQAZeUK3yIKoZ7ln0KWuN6wAx3upLpoY-7X_stkRYZHastDXzGvlc4Jn-i4Nf90su0bnxn2eJcv2VL_eP9CsjQu3IgQgveRHLMk1oGc2Rvb1dX_CpE147QFc=w400-h400"
  },
  {
    "Id": 55,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL6",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/YP0Fu4T1yFR345SdGpG9jjMif8NlLOY1cFMl-fXkPC-mwqZk9stSG4N9_PU2pv7K_VmPqPeWET1A7n5J_qaR7kNdWdM49-K1Bq_16cGD5hyPeHsVMJbmKBbwER9ncwYSnae_lznpnkc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/YP0Fu4T1yFR345SdGpG9jjMif8NlLOY1cFMl-fXkPC-mwqZk9stSG4N9_PU2pv7K_VmPqPeWET1A7n5J_qaR7kNdWdM49-K1Bq_16cGD5hyPeHsVMJbmKBbwER9ncwYSnae_lznpnkc=w400-h400"
  },
  {
    "Id": 52,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL3",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/Uc6qKUtVV-shjovmbtoMj-AwIHoe4BPKfZFhZ3i6wq7-irsJS_uktVKw-uttO3SZGluvm5gTMz6227QlZtqyhJRRm8_xa4nLyZfqrEzxgva2Jo1wc168DyJaTg-VsBulHT5jhGEjZk8=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Uc6qKUtVV-shjovmbtoMj-AwIHoe4BPKfZFhZ3i6wq7-irsJS_uktVKw-uttO3SZGluvm5gTMz6227QlZtqyhJRRm8_xa4nLyZfqrEzxgva2Jo1wc168DyJaTg-VsBulHT5jhGEjZk8=w400-h400"
  },
  {
    "Id": 50,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL1",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/jNypqUnGj0RdZtBgrg2rJtsaJSATazfwG1mCD0lRsP-VEI2PuEGgbTGlxkZFiW-DeA2E2eTCZr5607wpjhxPaR4I2eyPDlid5j-U5ifCC2BudGpznmtVkVIw9l94X0ujb-AMf-URaR4=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/jNypqUnGj0RdZtBgrg2rJtsaJSATazfwG1mCD0lRsP-VEI2PuEGgbTGlxkZFiW-DeA2E2eTCZr5607wpjhxPaR4I2eyPDlid5j-U5ifCC2BudGpznmtVkVIw9l94X0ujb-AMf-URaR4=w400-h400"
  },
  {
    "Id": 84,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL15",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/Nniq3JQXJxteI9Ucb9XVQo8N-ygoE1tITrWVLbZLZdRVrJ_8mm8j1EzajpWCo3SjCRDSZxqKLepGFuUVVmH8MiqNtcIj0diSX6Ghr3a_hjKPkLIbdHxAnIiNUKWozCIbBph_yBzlci8=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Nniq3JQXJxteI9Ucb9XVQo8N-ygoE1tITrWVLbZLZdRVrJ_8mm8j1EzajpWCo3SjCRDSZxqKLepGFuUVVmH8MiqNtcIj0diSX6Ghr3a_hjKPkLIbdHxAnIiNUKWozCIbBph_yBzlci8=w400-h400"
  },
  {
    "Id": 86,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL17",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/YSIPGG9hAD-jhDSvcY-9aiSrxLINdfw-h283jd9nRbYZla_sB0X2R4yPg6sJDdr_z896jk02LII7oC3Zr6h0exvRepTbcvCPzqGRu8gkNGZfYHhLzuvyXcraIx50lIcl9Mg9HpGA4hY=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/YSIPGG9hAD-jhDSvcY-9aiSrxLINdfw-h283jd9nRbYZla_sB0X2R4yPg6sJDdr_z896jk02LII7oC3Zr6h0exvRepTbcvCPzqGRu8gkNGZfYHhLzuvyXcraIx50lIcl9Mg9HpGA4hY=w400-h400"
  },
  {
    "Id": 92,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL23",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/xT40xHgWKVCcUiefajFcxwZ-zJMno08JM4DbLNdyi8zic3UHqaTH7e8C2GoMlmre8qYkm-DzRHO6w1cUPqDst7AANdCZCJ3HECiAXTbgne7h4mGG5jkLX-6sQxGkyKxcQxV3gQD8Ogg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/xT40xHgWKVCcUiefajFcxwZ-zJMno08JM4DbLNdyi8zic3UHqaTH7e8C2GoMlmre8qYkm-DzRHO6w1cUPqDst7AANdCZCJ3HECiAXTbgne7h4mGG5jkLX-6sQxGkyKxcQxV3gQD8Ogg=w400-h400"
  },
  {
    "Id": 57,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL8",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/BG3gArnYExcv7qAmXNJO-v7hSkKMQqvW7oHJJ6EIYlIeEXr4ARyebEMNYCYxyC0wJKwNxr2_yVuq5EstkYPTyec4LOIpa1dQYOSIoPnA4pZpuyN6Bs6Wc9OlL3wgEi8esngW_AUGYeQ=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/BG3gArnYExcv7qAmXNJO-v7hSkKMQqvW7oHJJ6EIYlIeEXr4ARyebEMNYCYxyC0wJKwNxr2_yVuq5EstkYPTyec4LOIpa1dQYOSIoPnA4pZpuyN6Bs6Wc9OlL3wgEi8esngW_AUGYeQ=w400-h400"
  },
  {
    "Id": 12,
    "Name": "Batik Dress Materials 28 AL",
    "ProductCode": "BDM19AL11",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/THZ-N2sj83P6LpXmdTAwicp3DzqtzH4x6ghmp80whB1ZJD1gKt-4BzQNFwKQjNPu63twhFmluLLXEppOym7EPQyIdi3Tq5XQezCisln4YPr3dVtal1T9DoRSRKpCQ7BWYsAwrynDogA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/THZ-N2sj83P6LpXmdTAwicp3DzqtzH4x6ghmp80whB1ZJD1gKt-4BzQNFwKQjNPu63twhFmluLLXEppOym7EPQyIdi3Tq5XQezCisln4YPr3dVtal1T9DoRSRKpCQ7BWYsAwrynDogA=w400-h400"
  },
  {
    "Id": 81,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL12",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/8VhaB7lKXzNQYheLlCOl-zvD1ZaI75E1CciOhw202PG0Q1XleSo_L5vYiAvtVl2xPlnkxiYXSz7XndXsdx_q7QYANAfbe1VAXhrmCtAR_gqeNLCAswXUarLNQnmgKkC1Uu7c4GekRpg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/8VhaB7lKXzNQYheLlCOl-zvD1ZaI75E1CciOhw202PG0Q1XleSo_L5vYiAvtVl2xPlnkxiYXSz7XndXsdx_q7QYANAfbe1VAXhrmCtAR_gqeNLCAswXUarLNQnmgKkC1Uu7c4GekRpg=w400-h400"
  },
  {
    "Id": 61,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL12",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/lYuk3g5uK2BSR0Ugu3wx-iNGOjAuqTqbz0JfEe-QOx5-aQ9vhPZwjOhh7lfyp3LfCdpi4QR5fqkFJxeV0AA7_HzyXPFEyTRr8IAfgk1tMNpaPDiVNVpAwVAf_4GxTDZXlwidUFrbhvs=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/lYuk3g5uK2BSR0Ugu3wx-iNGOjAuqTqbz0JfEe-QOx5-aQ9vhPZwjOhh7lfyp3LfCdpi4QR5fqkFJxeV0AA7_HzyXPFEyTRr8IAfgk1tMNpaPDiVNVpAwVAf_4GxTDZXlwidUFrbhvs=w400-h400"
  },
  {
    "Id": 42,
    "Name": "Printed Katan Silk Sets 28 AL",
    "ProductCode": "KSS19AL7",
    "CustomerPrice": 1550,
    "PhotoUrl": "https://lh3.googleusercontent.com/RNbdkdg2aycX_hQimdSta4avvK49oZ4cv-CGU6XdyaK1XwGZUpmkF_PficnJmzd6CBAXCepcZSz3gHhYT1lJg4M-reblWxgOnfYzWyfGIrSDDrFkfy-ptr4WuB95eb8ckhRKZ1Dv8Do=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/RNbdkdg2aycX_hQimdSta4avvK49oZ4cv-CGU6XdyaK1XwGZUpmkF_PficnJmzd6CBAXCepcZSz3gHhYT1lJg4M-reblWxgOnfYzWyfGIrSDDrFkfy-ptr4WuB95eb8ckhRKZ1Dv8Do=w400-h400"
  },
  {
    "Id": 51,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL2",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/7afzHGeKX0VGBf5hzU1VZvQuK3f2N8VEHlqb0x0uonCwNPY7rPah_7eQSVquPnHnS3RChSXeu_eP_t7HGY0r-EW_OX34R7JNa4qWn57288YTnGtWWCd4FOJzqpovZLecEKQe5C9rZQo=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/7afzHGeKX0VGBf5hzU1VZvQuK3f2N8VEHlqb0x0uonCwNPY7rPah_7eQSVquPnHnS3RChSXeu_eP_t7HGY0r-EW_OX34R7JNa4qWn57288YTnGtWWCd4FOJzqpovZLecEKQe5C9rZQo=w400-h400"
  },
  {
    "Id": 89,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL20",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/inzqvO7vd8bL7OabsWNvtmGl3IKJViNoVNB75l8ytOM4pbz3UohrsxOKTB1xYsn0h-VlwMcX8Dymy6cCokeVfM2ihs_8VEfrNprDSU9_3VpA380cn0l_n4DNB_XYedK1DvIe9Yo2Fzk=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/inzqvO7vd8bL7OabsWNvtmGl3IKJViNoVNB75l8ytOM4pbz3UohrsxOKTB1xYsn0h-VlwMcX8Dymy6cCokeVfM2ihs_8VEfrNprDSU9_3VpA380cn0l_n4DNB_XYedK1DvIe9Yo2Fzk=w400-h400"
  },
  {
    "Id": 97,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL1",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/SPgZBENIH21qAdOegcVISau4KqWGN47VQE_vLCJ7Fzint-Ot1dtsF6WlQ43ehiytvFQ3IqQk2s7GdvLTe0QAjUr21-sQAxpDRUh1K8uIdT5LZ5opI4QlMB6bYjZmCE79ff_OsYtettA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/SPgZBENIH21qAdOegcVISau4KqWGN47VQE_vLCJ7Fzint-Ot1dtsF6WlQ43ehiytvFQ3IqQk2s7GdvLTe0QAjUr21-sQAxpDRUh1K8uIdT5LZ5opI4QlMB6bYjZmCE79ff_OsYtettA=w400-h400"
  },
  {
    "Id": 88,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL19",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/ri9PxrC014UnXbVWiUdplbIpMW1RW-3PPP-DbjhiiUgA0mJu10tfM-nrGNcG8ZPuHhhmtiDnuSAh2eK7u5hZp3MfZr6RXpgUuGv8Qv5KfFIhmuOlu32nJasTXUIosCbgvryeHox98ik=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ri9PxrC014UnXbVWiUdplbIpMW1RW-3PPP-DbjhiiUgA0mJu10tfM-nrGNcG8ZPuHhhmtiDnuSAh2eK7u5hZp3MfZr6RXpgUuGv8Qv5KfFIhmuOlu32nJasTXUIosCbgvryeHox98ik=w400-h400"
  },
  {
    "Id": 58,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL9",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/QMWnsDlCVggTCFXPhrOlFVFbhcFyggJsm80b-KEpg-qfaVk2JIIcW4TuwyU5kDRv1dofM2t0fWC0zM-ZnTiz1suW1fcrIvr2zNfZ2fv2ZJhFvh9vqv4KuyHu7ZYj85CZGk3ZHcXQACI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/QMWnsDlCVggTCFXPhrOlFVFbhcFyggJsm80b-KEpg-qfaVk2JIIcW4TuwyU5kDRv1dofM2t0fWC0zM-ZnTiz1suW1fcrIvr2zNfZ2fv2ZJhFvh9vqv4KuyHu7ZYj85CZGk3ZHcXQACI=w400-h400"
  },
  {
    "Id": 93,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL24",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/KUhsBfg8AnXRDruTIurouziNQ0x1De_ywpQE9xOBqVDLs47Z5mVyj5syTnSZ-5ieQnNLfDRDWV8GTNjv1NAInpagLqYf2OjmOa_hxlNE2_2_l82PO8IkmoKOprWL9Tsbf5K-vk5L5n8=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/KUhsBfg8AnXRDruTIurouziNQ0x1De_ywpQE9xOBqVDLs47Z5mVyj5syTnSZ-5ieQnNLfDRDWV8GTNjv1NAInpagLqYf2OjmOa_hxlNE2_2_l82PO8IkmoKOprWL9Tsbf5K-vk5L5n8=w400-h400"
  },
  {
    "Id": 95,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL26",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/tE_ncG8qTPtVWgWwHbov4JCt413p1g7vAGclJ4ywmj-oDw0gaVUOaUiEoH3t8u_kuDap-5N-WaLMsit3dmWk8CLmYQiQrju-iVnxKIlpnaPvJSpHF6UzRl7tvlNC_anrJCpxscBEUyc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/tE_ncG8qTPtVWgWwHbov4JCt413p1g7vAGclJ4ywmj-oDw0gaVUOaUiEoH3t8u_kuDap-5N-WaLMsit3dmWk8CLmYQiQrju-iVnxKIlpnaPvJSpHF6UzRl7tvlNC_anrJCpxscBEUyc=w400-h400"
  },
  {
    "Id": 96,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL27",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/LsF8nKtWGAXlXnD4pKmiqA0u689FeWa-BR8AwEeSwjQV7WmdWfay535w1uWzTBtUBjrtfYNmrPpIG9-CQFO-GBleZKsrjJUQ7jMZweFsDBp0Ctb77B_VVsebP2DmGvYT46yemAoq_v4=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/LsF8nKtWGAXlXnD4pKmiqA0u689FeWa-BR8AwEeSwjQV7WmdWfay535w1uWzTBtUBjrtfYNmrPpIG9-CQFO-GBleZKsrjJUQ7jMZweFsDBp0Ctb77B_VVsebP2DmGvYT46yemAoq_v4=w400-h400"
  },
  {
    "Id": 66,
    "Name": "Printed Cotton top with Hand Applique Dupatta sets 18AL",
    "ProductCode": "CHC19AL2",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/428YG3klir8Z78RDWY1k_P1X8LmSKlcMlSpcf765VgBs2Pw0heHgp28E-PcAHk2ZWVRPKh8KGIkNwIVvIcr35hjXNaKW8fNNtCTgMwbf2j1clZ6ZZOkdID4nIU-5eMNYLKjLmILv3EE=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/428YG3klir8Z78RDWY1k_P1X8LmSKlcMlSpcf765VgBs2Pw0heHgp28E-PcAHk2ZWVRPKh8KGIkNwIVvIcr35hjXNaKW8fNNtCTgMwbf2j1clZ6ZZOkdID4nIU-5eMNYLKjLmILv3EE=w400-h400"
  },
  {
    "Id": 56,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL7",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/lRpwiKIF4LkLgw8DHvEeO4HypQUVh0b60ncpD7b6zn86yGe_Zr0UUfhaakHzzpSThqfs8MXE4SUHA8bZA8TJ9qcDR0qjymMHunyVIcN4GkT7T0mOH5TrBzaw8V-nNpv3_1K0dmqgZYo=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/lRpwiKIF4LkLgw8DHvEeO4HypQUVh0b60ncpD7b6zn86yGe_Zr0UUfhaakHzzpSThqfs8MXE4SUHA8bZA8TJ9qcDR0qjymMHunyVIcN4GkT7T0mOH5TrBzaw8V-nNpv3_1K0dmqgZYo=w400-h400"
  },
  {
    "Id": 59,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL10",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/2co0EC1vGAgsT2Dt6wRSSuQy8N0HUy1vqjvbtYR6oiWBYuY5Q11YmSYwfwSVhjoQ2gi0mF-qOhBUnjZS15JLl6MsXPjqLCrI6QIUQVuWp9TT7bolVQLTnitDitqirvmuXERo-K85-wU=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/2co0EC1vGAgsT2Dt6wRSSuQy8N0HUy1vqjvbtYR6oiWBYuY5Q11YmSYwfwSVhjoQ2gi0mF-qOhBUnjZS15JLl6MsXPjqLCrI6QIUQVuWp9TT7bolVQLTnitDitqirvmuXERo-K85-wU=w400-h400"
  },
  {
    "Id": 68,
    "Name": "Printed Cotton top with Hand Applique Dupatta sets 18AL",
    "ProductCode": "CHC19AL4",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/uWpmi9txM_kvQYV4xQvJ4OsCiE6SA8u4d9oXnrYkuAPBHLYmCUMWrdxWlzHyRAdk6PjazMUgqmeV6J07NrBjsHVOnauYoSLl3aZ15pGDzdv_mPOPTrQhUoT__ZC4RRGfBkASaJ-LXQU=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/uWpmi9txM_kvQYV4xQvJ4OsCiE6SA8u4d9oXnrYkuAPBHLYmCUMWrdxWlzHyRAdk6PjazMUgqmeV6J07NrBjsHVOnauYoSLl3aZ15pGDzdv_mPOPTrQhUoT__ZC4RRGfBkASaJ-LXQU=w400-h400"
  },
  {
    "Id": 63,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL14",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/erlbyOiD5ER07vlC0MYyH0b1TBcuwQKBulNESKLOV-phh7NSLos--494EDHwl9Oo1cQN7gGm7hJfKj3JhYFQGszkC56pP-fiXAsvZI6rxBsQZkCgxT0ZGgKDcJ1iuaMOY_hopYssAAI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/erlbyOiD5ER07vlC0MYyH0b1TBcuwQKBulNESKLOV-phh7NSLos--494EDHwl9Oo1cQN7gGm7hJfKj3JhYFQGszkC56pP-fiXAsvZI6rxBsQZkCgxT0ZGgKDcJ1iuaMOY_hopYssAAI=w400-h400"
  },
  {
    "Id": 67,
    "Name": "Printed Cotton top with Hand Applique Dupatta sets 18AL",
    "ProductCode": "CHC19AL3",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/Ek71hqMYMrhiseaDJr9uP6ogsyrsew7CCcqofvEvaBfjuA1BqgsWvXRFgTyArAdXESkM-1IlY-JTVgz8D_vguai1HLUAHPzry8mIiuhc6rhSBuB6t6374l-AKqBLcX_WLxSd_QeW2Jc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Ek71hqMYMrhiseaDJr9uP6ogsyrsew7CCcqofvEvaBfjuA1BqgsWvXRFgTyArAdXESkM-1IlY-JTVgz8D_vguai1HLUAHPzry8mIiuhc6rhSBuB6t6374l-AKqBLcX_WLxSd_QeW2Jc=w400-h400"
  },
  {
    "Id": 90,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL21",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/Ui3MW8QrJctDmJ20nh41w5SeKPq4o5DaB0xa8oEWbPE4MEz09LrIOEsAzeJxMs5NArzKDbC0uEbg0DzdNVNnmlREpVwYqOD9mnViVVe9o91AKbws8EobNpUUPY60R8acegqszLYpIsU=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Ui3MW8QrJctDmJ20nh41w5SeKPq4o5DaB0xa8oEWbPE4MEz09LrIOEsAzeJxMs5NArzKDbC0uEbg0DzdNVNnmlREpVwYqOD9mnViVVe9o91AKbws8EobNpUUPY60R8acegqszLYpIsU=w400-h400"
  },
  {
    "Id": 131,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL35",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/cZiMBbbufL4kqDIhysT8FYEKMngne_qyleDop_IrJX9WXc1ZGpdntuBbVZwfEd4AaZLl6yqBcLKn5bnxRRCmXW8Iq4pX6jmnffWnFFRuGX4r-LlzDmpZda0eo_CZZiWmRus3l4ktMEI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/cZiMBbbufL4kqDIhysT8FYEKMngne_qyleDop_IrJX9WXc1ZGpdntuBbVZwfEd4AaZLl6yqBcLKn5bnxRRCmXW8Iq4pX6jmnffWnFFRuGX4r-LlzDmpZda0eo_CZZiWmRus3l4ktMEI=w400-h400"
  },
  {
    "Id": 44,
    "Name": "Printed Khadi Dupion Sets 28AL",
    "ProductCode": "KDS19AL1",
    "CustomerPrice": 1450,
    "PhotoUrl": "https://lh3.googleusercontent.com/lVR3_3L6VYmmGe94ptqxNVaGwwkuDWLjBnTp4duLR6cvT5iyrf9my4uUVT9KiJG7-yOKnd7JclcMiyFvsC6wUpH1foJ-ttLLyLgEAZKb5xw74r77-hoIKB4AY_htLkLuJcn5Ax5Hzzw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/lVR3_3L6VYmmGe94ptqxNVaGwwkuDWLjBnTp4duLR6cvT5iyrf9my4uUVT9KiJG7-yOKnd7JclcMiyFvsC6wUpH1foJ-ttLLyLgEAZKb5xw74r77-hoIKB4AY_htLkLuJcn5Ax5Hzzw=w400-h400"
  },
  {
    "Id": 91,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL22",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/EDARvb358ULlQ69pTYE3jFXiLTrwLzdsOyyqFBNboteYyuN5a53_vOKZ1_tvB-FEsCSfxCkoncACPz_lbL-PneFFmXzykHm6F3TE23hAhQE88adFvbsyZcOzDV7Ed1WKZxd8JtQ9oeY=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/EDARvb358ULlQ69pTYE3jFXiLTrwLzdsOyyqFBNboteYyuN5a53_vOKZ1_tvB-FEsCSfxCkoncACPz_lbL-PneFFmXzykHm6F3TE23hAhQE88adFvbsyZcOzDV7Ed1WKZxd8JtQ9oeY=w400-h400"
  },
  {
    "Id": 72,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL3",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/zuPGDOneEfkqmdH-WLZHzUgsOScca8aVKET1Tna9ECYpUY9inB97QATqDM69n04-dag-rDKN0ZeUIS-r9rdmau9VFrE7DvVGxaosyhse9vGAjs1Tz8AH8LxAUKtSprqGeo1FqvJ8lC0=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/zuPGDOneEfkqmdH-WLZHzUgsOScca8aVKET1Tna9ECYpUY9inB97QATqDM69n04-dag-rDKN0ZeUIS-r9rdmau9VFrE7DvVGxaosyhse9vGAjs1Tz8AH8LxAUKtSprqGeo1FqvJ8lC0=w400-h400"
  },
  {
    "Id": 60,
    "Name": "Cutwork on semi silk sarees 25 AL",
    "ProductCode": "CSS19AL11",
    "CustomerPrice": 2450,
    "PhotoUrl": "https://lh3.googleusercontent.com/zRJ0Khva4qCK4NGzjYX3W4qb414gWxICwZ8D1zRnr5q_WrpFhWduoPPxWjlNP8vMJneWCOxiHaAPYCuamXudDJ5xxTC2BrQiyUJLmhprM62_OIuc8RsnhSI1Gy1twcBdVI8SRnT78FM=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/zRJ0Khva4qCK4NGzjYX3W4qb414gWxICwZ8D1zRnr5q_WrpFhWduoPPxWjlNP8vMJneWCOxiHaAPYCuamXudDJ5xxTC2BrQiyUJLmhprM62_OIuc8RsnhSI1Gy1twcBdVI8SRnT78FM=w400-h400"
  },
  {
    "Id": 98,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL2",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/SsHhG_qeppn1vizMoqIcNIKshZtLy6P2W5Dsz5HeQX8oPAV3j-DajHCV5pS2j9lJzA55S9g7HMK_VJ_pfBg_FXHqjE5qEsXEsJTdRKOCP0lZio6StPNTQKQWgq93GzVosIdKXcxjo_s=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/SsHhG_qeppn1vizMoqIcNIKshZtLy6P2W5Dsz5HeQX8oPAV3j-DajHCV5pS2j9lJzA55S9g7HMK_VJ_pfBg_FXHqjE5qEsXEsJTdRKOCP0lZio6StPNTQKQWgq93GzVosIdKXcxjo_s=w400-h400"
  },
  {
    "Id": 129,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL33",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/kXDxqfldEWjQs5ME9aH23joJgQzqbUkm1uYolPH4nmIPlu5FW6NBcjBPFkN7PaEc3Ydghb_Zxd4RzF0AoAq4jKv3JJB3UjkVNH8PtB10ibZGNJ49EkZB-6kGdwScIgtG3icGt_nC5BM=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/kXDxqfldEWjQs5ME9aH23joJgQzqbUkm1uYolPH4nmIPlu5FW6NBcjBPFkN7PaEc3Ydghb_Zxd4RzF0AoAq4jKv3JJB3UjkVNH8PtB10ibZGNJ49EkZB-6kGdwScIgtG3icGt_nC5BM=w400-h400"
  },
  {
    "Id": 109,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL13",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/3qPSqhuPP1x5I2F4Xa03T93vx5fceAXiu2bGy-u8-RjGlXD_ftw3oq3NhTEFNg1N2yn6El45SkLcAIVlqiilYauQyEB1gO5wW0St_utibly5b8PWAeEI38IgLnXrk76I4qvmTE-5QK4=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/3qPSqhuPP1x5I2F4Xa03T93vx5fceAXiu2bGy-u8-RjGlXD_ftw3oq3NhTEFNg1N2yn6El45SkLcAIVlqiilYauQyEB1gO5wW0St_utibly5b8PWAeEI38IgLnXrk76I4qvmTE-5QK4=w400-h400"
  },
  {
    "Id": 117,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL21",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/ebxleL8NjoQDaPnBPPGvzP76RM4k7gC9l2OohysHwEmoS6cvT-cGYJA2uxpirEHNC8-A1gd0HOFWD4DeVf2qeFGKzWwEBLAxFDXqKH_Z_dntShCPdpY_4e3HM3HXQTuMWO2MxJhQm48=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ebxleL8NjoQDaPnBPPGvzP76RM4k7gC9l2OohysHwEmoS6cvT-cGYJA2uxpirEHNC8-A1gd0HOFWD4DeVf2qeFGKzWwEBLAxFDXqKH_Z_dntShCPdpY_4e3HM3HXQTuMWO2MxJhQm48=w400-h400"
  },
  {
    "Id": 125,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL29",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/ThM6IDwhvT1p1epTz9XwOeXHJ4HO8qR3WaRYtphvnF1MM4X6BF1adbe2MzGgjwKISoGZJT8LII2J6RglDlKPqmwii8mOCKuK4ehav9KJB8vOq-uSr-fYVM8UP6e-dSI1rUYpk-_uRdw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ThM6IDwhvT1p1epTz9XwOeXHJ4HO8qR3WaRYtphvnF1MM4X6BF1adbe2MzGgjwKISoGZJT8LII2J6RglDlKPqmwii8mOCKuK4ehav9KJB8vOq-uSr-fYVM8UP6e-dSI1rUYpk-_uRdw=w400-h400"
  },
  {
    "Id": 133,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL37",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/_EkGpy_A2vRt19l753Uvv3CBt3J-dHlcVkPx2dF-Rjq9vIo1aNzqTmg4g2gDGagzFDpM9AW1xX4bfEHQ0YysZJ2WuVzR7dtTaJyJWU_v7aWhT_kyqE23FmSLNwDC2GJw_bDy0u42faY=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/_EkGpy_A2vRt19l753Uvv3CBt3J-dHlcVkPx2dF-Rjq9vIo1aNzqTmg4g2gDGagzFDpM9AW1xX4bfEHQ0YysZJ2WuVzR7dtTaJyJWU_v7aWhT_kyqE23FmSLNwDC2GJw_bDy0u42faY=w400-h400"
  },
  {
    "Id": 107,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL11",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/QTGok49WQWO0DI1SbENTvw7aR_bawzV6KG5Hk62TIWdgvRIhW0_k6LTgzOd6V6Cp-8UbNRbaIrPI7GeGmrkJO2Fjr2awn0NYeI7wUQO7yvvqjLFS0Nz-LPOJZFySW6ZYUAYkWqNlSLE=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/QTGok49WQWO0DI1SbENTvw7aR_bawzV6KG5Hk62TIWdgvRIhW0_k6LTgzOd6V6Cp-8UbNRbaIrPI7GeGmrkJO2Fjr2awn0NYeI7wUQO7yvvqjLFS0Nz-LPOJZFySW6ZYUAYkWqNlSLE=w400-h400"
  },
  {
    "Id": 105,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL9",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/cWASONyAnkMj-5FQrA5LXNMkesMz7R3TwmA9ICsCCiXPMo7W223KeEyPVqnJHU-LGYUavAuP3gaNkxpEbO5Duz7yhJR8RQnP-XY03IYyLP0PchSmjwhRIfxEc2MKYUGVmVj-2t80I34=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/cWASONyAnkMj-5FQrA5LXNMkesMz7R3TwmA9ICsCCiXPMo7W223KeEyPVqnJHU-LGYUavAuP3gaNkxpEbO5Duz7yhJR8RQnP-XY03IYyLP0PchSmjwhRIfxEc2MKYUGVmVj-2t80I34=w400-h400"
  },
  {
    "Id": 73,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL4",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/sUqgtbtwyKwa4_dXcYBcUYaHb0vlLVXnehb927PGj4u5ntIBSbGSUiwG9tTmsjYM3G0kObSIli3BwL0zodl1oIAKh1I037jcCXdtBmahxzqztyrz4rkQu9suEPJF-DBdLA28tP49wH8=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/sUqgtbtwyKwa4_dXcYBcUYaHb0vlLVXnehb927PGj4u5ntIBSbGSUiwG9tTmsjYM3G0kObSIli3BwL0zodl1oIAKh1I037jcCXdtBmahxzqztyrz4rkQu9suEPJF-DBdLA28tP49wH8=w400-h400"
  },
  {
    "Id": 77,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL8",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/EAZLAyBc0EQmP7NRpNaEx-xC4_9Vp49wj-FEtB9_toFUoOifSP5gMT0TTHv4-SrruQ0TTTKUZfu7XdXqjAEF4bGwE4VYHYdd4WkL6GmrcONLnq3tFmRPYME_xgX0fIreAQ88htTj_gk=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/EAZLAyBc0EQmP7NRpNaEx-xC4_9Vp49wj-FEtB9_toFUoOifSP5gMT0TTHv4-SrruQ0TTTKUZfu7XdXqjAEF4bGwE4VYHYdd4WkL6GmrcONLnq3tFmRPYME_xgX0fIreAQ88htTj_gk=w400-h400"
  },
  {
    "Id": 104,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL8",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/VddgOMfq_Y-q5ARoaEpFiM6IO00U-jFaxmrZjs_0SPLh2fjwkreIBYSpJPE8XUAVqhMyTj4BHgahDGiKqzTXNDP3zw-YB88WJhAc2y1aJ7_dSNanA9WNCvTPLz33uuoUmXqY8Y1EiUg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/VddgOMfq_Y-q5ARoaEpFiM6IO00U-jFaxmrZjs_0SPLh2fjwkreIBYSpJPE8XUAVqhMyTj4BHgahDGiKqzTXNDP3zw-YB88WJhAc2y1aJ7_dSNanA9WNCvTPLz33uuoUmXqY8Y1EiUg=w400-h400"
  },
  {
    "Id": 83,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL14",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/x653PDqPRJNaI8u1txRw-qy8sDEpXHKYXTJZtgpH5dnKFbJzEiFfuYC-R7C8QoDO1W-t8M_47azg_T_6mRIP9T45PHefgnQrc70qJAXqfp3lltxBC28MqJi4OPiavvsekCZP16Qs6Dc=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/x653PDqPRJNaI8u1txRw-qy8sDEpXHKYXTJZtgpH5dnKFbJzEiFfuYC-R7C8QoDO1W-t8M_47azg_T_6mRIP9T45PHefgnQrc70qJAXqfp3lltxBC28MqJi4OPiavvsekCZP16Qs6Dc=w400-h400"
  },
  {
    "Id": 65,
    "Name": "Printed Cotton top with Hand Applique Dupatta sets 18AL",
    "ProductCode": "CHC19AL1",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/ME7ZJgDkPgYkAmYQJit_ukQCZbFMNdDdfpnenY0IkHgyotdi1BCL8ebNTIeugUlGfIayRIRWUH_cYNq3FXSqhq_UYB24Hao7rPCNdGeHLiCLGj-mpp1xMyN3_ufoE6Spcl-3YX29rOM=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/ME7ZJgDkPgYkAmYQJit_ukQCZbFMNdDdfpnenY0IkHgyotdi1BCL8ebNTIeugUlGfIayRIRWUH_cYNq3FXSqhq_UYB24Hao7rPCNdGeHLiCLGj-mpp1xMyN3_ufoE6Spcl-3YX29rOM=w400-h400"
  },
  {
    "Id": 69,
    "Name": "Printed Cotton top with Hand Applique Dupatta sets 18AL",
    "ProductCode": "CHC19AL5",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/mqLVK6AbYQnvu2JEEe3UyT4hZTCI5NMeVpnsy8FjthiJmWTzL4hjtB43uZoAlwNqHPBtv93P4HxUQgKp5UEiR6NSb9Nxjs1g2tpUHcriPyGh8zafGyAOWAwcIAJMwzkviiYmuvSvjFw=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/mqLVK6AbYQnvu2JEEe3UyT4hZTCI5NMeVpnsy8FjthiJmWTzL4hjtB43uZoAlwNqHPBtv93P4HxUQgKp5UEiR6NSb9Nxjs1g2tpUHcriPyGh8zafGyAOWAwcIAJMwzkviiYmuvSvjFw=w400-h400"
  },
  {
    "Id": 134,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL38",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/xyI1itzHTzOvVlu4F5SOrjSaDQ1E-SBMwm6H_DmTruLwAexTHuVgCEO9POYV-VBK2867bjpU3QmOBE9jfAi6RRGNr_OYG98of52L95BUXy8OKCdjjgevmbHgMXylBWyN_mTAw0IoIoI=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/xyI1itzHTzOvVlu4F5SOrjSaDQ1E-SBMwm6H_DmTruLwAexTHuVgCEO9POYV-VBK2867bjpU3QmOBE9jfAi6RRGNr_OYG98of52L95BUXy8OKCdjjgevmbHgMXylBWyN_mTAw0IoIoI=w400-h400"
  },
  {
    "Id": 136,
    "Name": "Machine Shadow work sarees 29 AL",
    "ProductCode": "MSS19AL2",
    "CustomerPrice": 1800,
    "PhotoUrl": "https://lh3.googleusercontent.com/Ws-o2SszHAPbnLkwNRgx9qfrCtjR4cnYcZXnOK15afLPgBUYKrQEeCAqx4myV4xkAQ4Isrlh9GrLXdOSawzTunQHq9cWKTLLOtBbQaZxljqM2LwD9N3Mdw0goOj3HyhbitnRuSykRA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/Ws-o2SszHAPbnLkwNRgx9qfrCtjR4cnYcZXnOK15afLPgBUYKrQEeCAqx4myV4xkAQ4Isrlh9GrLXdOSawzTunQHq9cWKTLLOtBbQaZxljqM2LwD9N3Mdw0goOj3HyhbitnRuSykRA=w400-h400"
  },
  {
    "Id": 115,
    "Name": "Embroidered Silky Kota Sarees 29AL",
    "ProductCode": "EKK19AL19",
    "CustomerPrice": 1650,
    "PhotoUrl": "https://lh3.googleusercontent.com/aH8l_PlNqOOVtzWnsa5v5F0tqHluFKDFIHU4T2zqNSHjfm04n3Jz87z9Q6aolOa9wsJfaFX4Vn5xjYXlipfmmq65wfg_f1T6ILnNRbDySb1r31uZiszSBLiI8ssaHzc-B9T0Y_5fUSA=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/aH8l_PlNqOOVtzWnsa5v5F0tqHluFKDFIHU4T2zqNSHjfm04n3Jz87z9Q6aolOa9wsJfaFX4Vn5xjYXlipfmmq65wfg_f1T6ILnNRbDySb1r31uZiszSBLiI8ssaHzc-B9T0Y_5fUSA=w400-h400"
  },
  {
    "Id": 71,
    "Name": "Semi Rawsilk Dupatta sets 23 AL ",
    "ProductCode": "SRD19AL2",
    "CustomerPrice": 1495,
    "PhotoUrl": "https://lh3.googleusercontent.com/k4XoJhfa67L54oHfm93IkPtSLGHIPO5zmRGF1IIbaMNo0upTQvIN3JrcRKWGcfsdVVII-MwK_a4lHFwHir3HTdNJ2wyhniUdRG318EdVeeZH6Upl4tNFLg6urEs8_puus4llux-xChg=w75-h75",
    "BigPhotoUrl": "https://lh3.googleusercontent.com/k4XoJhfa67L54oHfm93IkPtSLGHIPO5zmRGF1IIbaMNo0upTQvIN3JrcRKWGcfsdVVII-MwK_a4lHFwHir3HTdNJ2wyhniUdRG318EdVeeZH6Upl4tNFLg6urEs8_puus4llux-xChg=w400-h400"
  }
]  


*/