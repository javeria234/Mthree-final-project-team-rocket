package com.example.final_project.model;

import java.io.Serializable;
import java.util.Objects;

public class CartId implements Serializable {
    private Integer userID;
    private Integer product;

    public CartId() {}

    public CartId(Integer userID, Integer product) {
        this.userID = userID;
        this.product = product;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartId cartId = (CartId) o;
        return Objects.equals(userID, cartId.userID) && Objects.equals(product, cartId.product);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userID, product);
    }
}
